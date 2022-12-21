/**
 * 데코레이터에 사용할 Reflect metadataKey 모음
 */
export const DECORATORS_PREFIX = 'openrpc';
export const DECORATORS = {
  API_OPERATION: `${DECORATORS_PREFIX}/apiOperation`,
  API_RESPONSE: `${DECORATORS_PREFIX}/apiResponse`,
  API_PRODUCES: `${DECORATORS_PREFIX}/apiProduces`,
  API_CONSUMES: `${DECORATORS_PREFIX}/apiConsumes`,
  API_TAGS: `${DECORATORS_PREFIX}/apiUseTags`,
  API_PARAMETERS: `${DECORATORS_PREFIX}/apiParameters`,
  API_HEADERS: `${DECORATORS_PREFIX}/apiHeaders`,
  API_MODEL_PROPERTIES: `${DECORATORS_PREFIX}/apiModelProperties`,
  API_MODEL_PROPERTIES_ARRAY: `${DECORATORS_PREFIX}/apiModelPropertiesArray`,
  API_SECURITY: `${DECORATORS_PREFIX}/apiSecurity`,
  API_EXCLUDE_ENDPOINT: `${DECORATORS_PREFIX}/apiExcludeEndpoint`,
  API_EXCLUDE_CONTROLLER: `${DECORATORS_PREFIX}/apiExcludeController`,
  API_EXTRA_MODELS: `${DECORATORS_PREFIX}/apiExtraModels`,
  API_EXTENSION: `${DECORATORS_PREFIX}/apiExtension`
};
