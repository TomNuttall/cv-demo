import { ApolloServer } from '@apollo/server'
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda'
import { serverProps } from './server.js'
import { createContext } from './context.js'

const server = new ApolloServer(serverProps)
const requestHandler = handlers.createAPIGatewayProxyEventV2RequestHandler()

export const handler = startServerAndCreateLambdaHandler(
  //@ts-ignore
  server,
  requestHandler,
  {
    context: createContext,
  },
)
