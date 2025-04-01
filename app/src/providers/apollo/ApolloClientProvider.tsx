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
    ? 'http://localhost:3000/graphql'
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
