/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { ScopedClusterClient } from 'src/core/server/';

export {
  // Object types
  Agent,
  AgentSOAttributes,
  AgentStatus,
  AgentType,
  AgentEvent,
  AgentEventSOAttributes,
  AgentAction,
  Datasource,
  NewDatasource,
  FullAgentConfigDatasource,
  FullAgentConfig,
  AgentConfig,
  NewAgentConfig,
  AgentConfigStatus,
  Output,
  NewOutput,
  OutputType,
  EnrollmentAPIKey,
  EnrollmentAPIKeySOAttributes,
  Installation,
  InstallationStatus,
  PackageInfo,
  VarsEntry,
  Dataset,
  AssetReference,
  ElasticsearchAssetType,
  IngestAssetType,
  RegistryPackage,
  AssetType,
  Installable,
  KibanaAssetType,
  AssetParts,
  AssetsGroupedByServiceByType,
  CategoryId,
  CategorySummaryList,
  RegistrySearchResults,
  IndexTemplate,
} from '../../common';

export type CallESAsCurrentUser = ScopedClusterClient['callAsCurrentUser'];

export type AgentConfigUpdateHandler = (
  action: 'created' | 'updated' | 'deleted',
  agentConfigId: string
) => Promise<void>;

export * from './models';
export * from './rest_spec';
