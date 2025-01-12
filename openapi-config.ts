import type { ConfigFile } from '@rtk-query/codegen-openapi'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const config: ConfigFile = {
  schemaFile: 'https://localhost:8081/openapi/v1.json',
  apiFile: './src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './src/store/api.ts',
  exportName: 'api',
  hooks: true,
  outputFiles: {
    './src/store/AccessManagement.ts': {
      filterEndpoints: [/AccessManagement/i],
    },
    './src/store/Warehouses.ts': {
      filterEndpoints: [/Warehouses/i],
    },
    './src/store/Articles.ts': {
      filterEndpoints:[/Articles/i],
    },
    './src/store/Contractors.ts': {
      filterEndpoints: [/Contractors/i],
    },
    './src/store/Orders.ts': {
      filterEndpoints: [/Orders/i],
    },
  },
}

export default config