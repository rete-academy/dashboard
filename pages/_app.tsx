import { ApolloProvider, ApolloClient } from '@apollo/client';
import { useApollo } from 'src/apollo';

export default function App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
      
  )
}

