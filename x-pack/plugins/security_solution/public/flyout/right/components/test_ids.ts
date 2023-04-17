/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { COLOR_TEST_ID, ICON_TEST_ID, VALUE_TEST_ID } from './summary_panel';
import { CONTENT_TEST_ID, HEADER_TEST_ID } from './expandable_section';

/* Header */

export const FLYOUT_HEADER_TITLE_TEST_ID = 'securitySolutionDocumentDetailsFlyoutHeaderTitle';
export const EXPAND_DETAILS_BUTTON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutHeaderExpandDetailButton';
export const COLLAPSE_DETAILS_BUTTON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutHeaderCollapseDetailButton';
export const FLYOUT_HEADER_SEVERITY_TITLE_TEST_ID =
  'securitySolutionAlertDetailsFlyoutHeaderSeverityTitle';
export const FLYOUT_HEADER_SEVERITY_VALUE_TEST_ID = 'severity';
export const FLYOUT_HEADER_RISK_SCORE_TITLE_TEST_ID =
  'securitySolutionAlertDetailsFlyoutHeaderRiskScoreTitle';
export const FLYOUT_HEADER_RISK_SCORE_VALUE_TEST_ID =
  'securitySolutionAlertDetailsFlyoutHeaderRiskScoreValue';

/* Description section */

export const DESCRIPTION_SECTION_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutDescriptionSection';
export const DESCRIPTION_SECTION_HEADER_TEST_ID = DESCRIPTION_SECTION_TEST_ID + HEADER_TEST_ID;
export const DESCRIPTION_SECTION_CONTENT_TEST_ID = DESCRIPTION_SECTION_TEST_ID + CONTENT_TEST_ID;
export const DESCRIPTION_TITLE_TEST_ID = 'securitySolutionDocumentDetailsFlyoutDescriptionTitle';
export const DESCRIPTION_DETAILS_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutDescriptionDetails';
export const DESCRIPTION_EXPAND_BUTTON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutDescriptionExpandButton';
export const REASON_TITLE_TEST_ID = 'securitySolutionDocumentDetailsFlyoutReasonTitle';
export const REASON_DETAILS_TEST_ID = 'securitySolutionDocumentDetailsFlyoutReasonDetails';
export const MITRE_ATTACK_TITLE_TEST_ID = 'securitySolutionAlertDetailsFlyoutMitreAttackTitle';
export const MITRE_ATTACK_DETAILS_TEST_ID = 'securitySolutionAlertDetailsFlyoutMitreAttackDetails';

/* Investigation section */

export const INVESTIGATION_SECTION_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutInvestigationSection';
export const INVESTIGATION_SECTION_HEADER_TEST_ID = INVESTIGATION_SECTION_TEST_ID + HEADER_TEST_ID;
export const INVESTIGATION_SECTION_CONTENT_TEST_ID =
  INVESTIGATION_SECTION_TEST_ID + CONTENT_TEST_ID;
export const HIGHLIGHTED_FIELDS_TITLE_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutHighlightedFieldsTitle';
export const HIGHLIGHTED_FIELDS_DETAILS_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutHighlightedFieldsDetails';
export const HIGHLIGHTED_FIELDS_TEST_ID = 'securitySolutionDocumentDetailsFlyoutHighlightedFields';
export const HIGHLIGHTED_FIELDS_HEADER_EXPAND_ICON_TEST_ID = 'query-toggle-header';
export const HIGHLIGHTED_FIELDS_GO_TO_TABLE_LINK = 'summary-view-go-to-table-link';
export const INSIGHTS_TEST_ID = 'securitySolutionDocumentDetailsFlyoutInsights';
export const INSIGHTS_HEADER_TEST_ID = 'securitySolutionDocumentDetailsFlyoutInsightsHeader';
export const ENTITIES_HEADER_TEST_ID = 'securitySolutionDocumentDetailsFlyoutEntitiesHeader';
export const ENTITIES_CONTENT_TEST_ID = 'securitySolutionDocumentDetailsFlyoutEntitiesContent';
export const ENTITIES_VIEW_ALL_BUTTON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesViewAllButton';
export const THREAT_INTELLIGENCE_HEADER_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutThreatIntelligenceHeader';
export const THREAT_INTELLIGENCE_CONTENT_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutThreatIntelligenceContent';
export const THREAT_INTELLIGENCE_VIEW_ALL_BUTTON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutThreatIntelligenceViewAllButton';
export const ENTITY_PANEL_TEST_ID = 'securitySolutionDocumentDetailsFlyoutEntityPanel';
export const ENTITY_PANEL_ICON_TEST_ID = 'securitySolutionDocumentDetailsFlyoutEntityPanelTypeIcon';
export const ENTITY_PANEL_TOGGLE_BUTTON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntityPanelToggleButton';
export const ENTITY_PANEL_HEADER_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntityPanelHeaderTitle';
export const ENTITY_PANEL_CONTENT_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntityPanelContent';
export const TECHNICAL_PREVIEW_ICON_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutTechnicalPreviewIcon';
export const ENTITIES_USER_OVERVIEW_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesUserOverview';
export const ENTITIES_USER_OVERVIEW_IP_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesUserOverviewIP';
export const ENTITIES_USER_OVERVIEW_RISK_LEVEL_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesUserOverviewRiskLevel';
export const ENTITIES_HOST_OVERVIEW_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesHostOverview';
export const ENTITIES_HOST_OVERVIEW_IP_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesHostOverviewIP';
export const ENTITIES_HOST_OVERVIEW_RISK_LEVEL_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutEntitiesHostOverviewRiskLevel';
export const INSIGHTS_THREAT_INTELLIGENCE_TEST_ID =
  'securitySolutionDocumentDetailsFlyoutInsightsThreatIntelligence';
export const INSIGHTS_THREAT_INTELLIGENCE_ICON_TEST_ID =
  INSIGHTS_THREAT_INTELLIGENCE_TEST_ID + ICON_TEST_ID;
export const INSIGHTS_THREAT_INTELLIGENCE_VALUE_TEST_ID =
  INSIGHTS_THREAT_INTELLIGENCE_TEST_ID + VALUE_TEST_ID;
export const INSIGHTS_THREAT_INTELLIGENCE_COLOR_TEST_ID =
  INSIGHTS_THREAT_INTELLIGENCE_TEST_ID + COLOR_TEST_ID;
