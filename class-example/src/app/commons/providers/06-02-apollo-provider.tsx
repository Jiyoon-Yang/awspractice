"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function ApolloSetting(props) {
  const client = new ApolloClient({
    uri: "http://main-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.모든페이지}</ApolloProvider>;
}
