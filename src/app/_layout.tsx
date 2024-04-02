import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";

const apollo_key = process.env.EXPO_PUBLIC_APOLLO_KEY || "";
const apollo_uri = process.env.EXPO_PUBLIC_APOLLO_URI || "";

const client = new ApolloClient({
  uri: apollo_uri,
  cache: new InMemoryCache(),
  headers: {
    Authorization: apollo_key,
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
