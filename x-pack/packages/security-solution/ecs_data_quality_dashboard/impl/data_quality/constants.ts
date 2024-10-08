/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EcsFlat } from '@elastic/ecs';
import { EuiComboBoxOptionOption } from '@elastic/eui';

import { EcsFieldMetadata } from './types';
import * as i18n from './translations';

export const EcsFlatTyped = EcsFlat as unknown as Record<string, EcsFieldMetadata>;
export type EcsFlatTyped = typeof EcsFlatTyped;

export const ilmPhaseOptionsStatic: EuiComboBoxOptionOption[] = [
  {
    label: i18n.HOT,
    value: 'hot',
  },
  {
    label: i18n.WARM,
    value: 'warm',
  },
  {
    disabled: true,
    label: i18n.COLD,
    value: 'cold',
  },
  {
    disabled: true,
    label: i18n.FROZEN,
    value: 'frozen',
  },
  {
    label: i18n.UNMANAGED,
    value: 'unmanaged',
  },
];
