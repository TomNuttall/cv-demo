import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from '@apollo/client'

const httpLink = new HttpLink({
  uri: import.meta.env.PROD
    ? 'https://62wua3gtij.execute-api.eu-west-2.amazonaws.com/graphql'
    : 'http://localhost:3000/graphql',
})

const ApolloClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const client = useMemo(() => {
    return new ApolloClient({
      link: from([httpLink]),
      cache: new InMemoryCache({}),
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
