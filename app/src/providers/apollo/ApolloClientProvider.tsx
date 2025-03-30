// import { useMemo } from 'react'
// import {
//   ApolloClient,
//   ApolloProvider,
//   InMemoryCache,
//   from,
//   HttpLink,
// } from '@apollo/client'
import { MockedProvider } from '@apollo/client/testing'
import { getCVMock, getCoveringLetterMock } from './Mocks'

// const httpLink = new HttpLink({
//   uri: 'http://localhost:3000/graphql/',
// })

const ApolloClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // const client = useMemo(() => {
  //   return new ApolloClient({
  //     link: from([httpLink]),
  //     cache: new InMemoryCache({}),
  //   })
  // }, [])

  const mocks = [getCVMock, getCoveringLetterMock]

  return (
    // <ApolloProvider client={client}>
    <MockedProvider mocks={mocks}>{children}</MockedProvider>
    // </ApolloProvider>
  )
}

export default ApolloClientProvider
