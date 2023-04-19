/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as i18n from '../translations';
import type { Bucket, UnallowedValueCount, UnallowedValueSearchResult } from '../types';

const UNALLOWED_VALUES_API_ROUTE = '/internal/ecs_data_quality_dashboard/unallowed_field_values';

export const isBucket = (maybeBucket: unknown): maybeBucket is Bucket =>
  typeof (maybeBucket as Bucket).key === 'string' &&
  typeof (maybeBucket as Bucket).doc_count === 'number';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const getUnallowedValueCount = ({ doc_count, key }: Bucket): UnallowedValueCount => ({
  count: doc_count,
  fieldName: key,
});

export const getUnallowedValues = ({
  searchResults,
}: {
  indexName: string;
  searchResults: UnallowedValueSearchResult[] | null;
}): Record<string, UnallowedValueCount[]> => {
  if (searchResults == null || !Array.isArray(searchResults)) {
    return {};
  }

  return searchResults.reduce((unallowedValuesInAllResults, searchResult) => {
    const unallowedValuesInSingleResult = Object.keys(searchResult.aggregations || {}).reduce(
      (acc, indexFieldName) => {
        const buckets = searchResult?.aggregations?.[indexFieldName].buckets;

        return {
          ...acc,
          [indexFieldName]: buckets?.flatMap((x) => (isBucket(x) ? getUnallowedValueCount(x) : [])),
        };
      },
      {}
    );

    return {
      ...unallowedValuesInAllResults,
      ...unallowedValuesInSingleResult,
    };
  }, {} as unknown as Record<string, UnallowedValueCount[]>);
};

export async function fetchUnallowedValues({
  abortController,
  indexName,
}: {
  abortController: AbortController;
  indexName: string;
}): Promise<UnallowedValueSearchResult[]> {
  const response = await fetch(UNALLOWED_VALUES_API_ROUTE, {
    body: JSON.stringify([{ indexName }]),
    headers: { 'Content-Type': 'application/json', 'kbn-xsrf': 'xsrf' },
    method: 'POST',
    signal: abortController.signal,
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(
    i18n.ERROR_LOADING_UNALLOWED_VALUES({
      details: response.statusText,
      indexName,
    })
  );
}
