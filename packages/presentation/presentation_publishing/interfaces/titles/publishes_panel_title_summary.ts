/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor licen/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PublishingSubject } from '../../publishing_subject';

export interface PublishesPanelTitleSummary {
  panelTitleSummary: PublishingSubject<string | undefined>;
  defaultPanelTitleSummary?: PublishingSubject<string | undefined>;
}

export type PublishesWritablePanelTitleSummary = PublishesPanelTitleSummary & {
  setPanelTitleSummary: (newTitle: string | undefined) => void;
};

export const apiPublishesPanelTitleSummary = (
  unknownApi: null | unknown
): unknownApi is PublishesPanelTitleSummary => {
  return Boolean(
    unknownApi && (unknownApi as PublishesPanelTitleSummary)?.panelTitleSummary !== undefined
  );
};

export const apiPublishesWritablePanelTitleSummary = (
  unknownApi: null | unknown
): unknownApi is PublishesWritablePanelTitleSummary => {
  return (
    apiPublishesPanelTitleSummary(unknownApi) &&
    (unknownApi as PublishesWritablePanelTitleSummary).setPanelTitleSummary !== undefined &&
    typeof (unknownApi as PublishesWritablePanelTitleSummary).setPanelTitleSummary === 'function'
  );
};
