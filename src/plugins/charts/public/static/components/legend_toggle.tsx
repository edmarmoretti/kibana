/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { memo, useMemo } from 'react';
import { i18n } from '@kbn/i18n';
import { EuiButtonIcon, useEuiTheme } from '@elastic/eui';
import { Position } from '@elastic/charts';
import { css } from '@emotion/react';

export interface LegendToggleProps {
  onClick: () => void;
  showLegend: boolean;
  legendPosition: Position;
}

const LegendToggleComponent = ({ onClick, showLegend, legendPosition }: LegendToggleProps) => {
  const { euiTheme } = useEuiTheme();

  const baseStyles = useMemo(
    () => css`
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      margin: ${euiTheme.size.xs};
    `,
    [euiTheme.size.xs]
  );

  const isOpenStyle = useMemo(
    () => css`
      background-color: ${euiTheme.colors.lightestShade};
    `,
    [euiTheme.colors.lightestShade]
  );

  const positionStyle = useMemo(
    () => css`
      left: 0;
      bottom: 0;
      right: auto;
      top: auto;
    `,
    []
  );

  return (
    <EuiButtonIcon
      type="button"
      iconType="list"
      color="text"
      onClick={onClick}
      css={[
        baseStyles,
        showLegend ? isOpenStyle : null,
        positionStyle,
      ]}
      aria-label={i18n.translate('charts.legend.toggleLegendButtonAriaLabel', {
        defaultMessage: 'Legenda',
      })}
      aria-expanded={showLegend}
      isSelected={showLegend}
      data-test-subj="vislibToggleLegend"
      title={i18n.translate('charts.legend.toggleLegendButtonTitle', {
        defaultMessage: 'Legenda',
      })}
    />
  );
};

export const LegendToggle = memo(LegendToggleComponent);
