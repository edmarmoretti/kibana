/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Client } from '@elastic/elasticsearch';
import type { SearchResponse } from '@elastic/elasticsearch/lib/api/typesWithBodyKey';
import { ALERTING_CASES_SAVED_OBJECT_INDEX } from '@kbn/core-saved-objects-server';
import { SavedObjectReference } from '@kbn/core/server';
import { LegacyRuleNotificationAlertTypeParams } from '@kbn/security-solution-plugin/server/lib/detection_engine/rule_actions_legacy';

interface LegacyActionNotificationSO extends LegacyRuleNotificationAlertTypeParams {
  references: SavedObjectReference[];
}

/**
 * Fetch all legacy action sidecar notification SOs from the .kibana index
 * @param es The ElasticSearch service
 */
export const getLegacyActionNotificationSO = async (
  es: Client
): Promise<SearchResponse<LegacyActionNotificationSO>> =>
  es.search({
    index: ALERTING_CASES_SAVED_OBJECT_INDEX,
    q: 'alert.alertTypeId:siem.notifications',
  });
