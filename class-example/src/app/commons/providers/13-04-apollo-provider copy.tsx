"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function ApiProvider(props) {
  const client = new ApolloClient({
    uri: "http://main-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
