"use client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useAccessTokenStore } from "../stores/20-01-access-token-store";
import { useEffect } from "react";
export default function ApiHeaderProvider(props) {
  //프리렌더링 무시
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const { accessToken, setAccessToken } = useAccessTokenStore();
  const uploadLink = createUploadLink({
    uri: "http://main-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
