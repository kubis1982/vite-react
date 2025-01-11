import { ConfigFile } from '@rtk-query/codegen-openapi'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const config: ConfigFile = {
    schemaFile: 'https://localhost:8081/openapi/v1.json',
    apiFile: './src/store/emptyApi.ts',
    apiImport: 'emptySplitApi',
    exportName: 'modularApi',
    hooks: false,
    tag: true,
    outputFile: './src/store/api.ts'
  }
  
  export default config