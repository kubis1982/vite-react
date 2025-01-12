import type { ConfigFile } from '@rtk-query/codegen-openapi'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const config: ConfigFile = {
  schemaFile: 'https://localhost:8081/openapi/v1.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './src/store/api.ts',
  exportName: 'api',
  hooks: true,
}

export default config