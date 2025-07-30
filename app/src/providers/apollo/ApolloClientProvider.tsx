import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth } from '@clerk/clerk-react'

const httpLink = new HttpLink({
  uri: import.meta.env.PROD
    ? 'https://62wua3gtij.execute-api.eu-west-2.amazonaws.com/graphql'
    : 'http://localhost:3000/graphql',
})

const ApolloClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { getToken } = useAuth()

  const client = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const token = await getToken()
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      }
    })

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache({}),
    })
  }, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
