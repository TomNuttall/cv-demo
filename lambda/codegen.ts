import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/schemas/schema.graphql',
  generates: {
    './src/__generated__/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-operations'],
      config: {
        useIndexSignature: true,
        contextType: '../context.js#Context',
        avoidOptionals: true,
      },
    },
  },
}
export default config
