/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import { Legacy } from '../../../legacy_shims';
import { i18n } from '@kbn/i18n';
import { uiRoutes } from '../../../angular/helpers/routes';
import { routeInitProvider } from '../../../lib/route_init';
import template from './index.html';
import { MonitoringViewBaseController } from '../../';
import { Overview } from '../../../components/cluster/overview';
import { SetupModeRenderer } from '../../../components/renderers';
import {
  CODE_PATH_ALL,
  MONITORING_CONFIG_ALERTING_EMAIL_ADDRESS,
  KIBANA_ALERTING_ENABLED,
} from '../../../../common/constants';

const CODE_PATHS = [CODE_PATH_ALL];

uiRoutes.when('/overview', {
  template,
  resolve: {
    clusters(Private) {
      // checks license info of all monitored clusters for multi-cluster monitoring usage and capability
      const routeInit = Private(routeInitProvider);
      return routeInit({ codePaths: CODE_PATHS });
    },
  },
  controller: class extends MonitoringViewBaseController {
    constructor($injector, $scope) {
      const monitoringClusters = $injector.get('monitoringClusters');
      const globalState = $injector.get('globalState');
      const showLicenseExpiration = $injector.get('showLicenseExpiration');
      const config = $injector.get('config');

      super({
        title: i18n.translate('xpack.monitoring.cluster.overviewTitle', {
          defaultMessage: 'Overview',
        }),
        defaultData: {},
        getPageData: async () => {
          const clusters = await monitoringClusters(
            globalState.cluster_uuid,
            globalState.ccs,
            CODE_PATHS
          );
          return clusters[0];
        },
        reactNodeId: 'monitoringClusterOverviewApp',
        $scope,
        $injector,
      });

      $scope.$watch(
        () => this.data,
        async (data) => {
          if (isEmpty(data)) {
            return;
          }

          let emailAddress = Legacy.shims.getInjected('monitoringLegacyEmailAddress') || '';
          if (KIBANA_ALERTING_ENABLED) {
            emailAddress = config.get(MONITORING_CONFIG_ALERTING_EMAIL_ADDRESS) || emailAddress;
          }

          this.renderReact(
            <SetupModeRenderer
              scope={$scope}
              injector={$injector}
              render={({ setupMode, flyoutComponent, bottomBarComponent }) => (
                <Fragment>
                  {flyoutComponent}
                  <Overview
                    cluster={data}
                    emailAddress={emailAddress}
                    setupMode={setupMode}
                    showLicenseExpiration={showLicenseExpiration}
                  />
                  {bottomBarComponent}
                </Fragment>
              )}
            />
          );
        }
      );
    }
  },
});
