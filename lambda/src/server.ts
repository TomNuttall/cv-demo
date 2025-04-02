import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'
import { fileURLToPath } from 'url'
import path from 'path'

import queries from './resolvers/queries.js'
import permissions from './permissions/permissions.js'

import { readFileSync } from 'fs'
import { join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const schemaFilePath = join(__dirname, 'schemas', 'schema.graphql')
const typeDefs = readFileSync(schemaFilePath, { encoding: 'utf-8' })

const resolvers = {
  Query: queries,
}

const schema = makeExecutableSchema({ typeDefs, resolvers })
// Add for auth
//const securedSchema = applyMiddleware(schema, permissions)

export const serverProps = {
  schema: schema,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault(),
  ],
  introspection: process.env.NODE_ENV !== 'production',
}
