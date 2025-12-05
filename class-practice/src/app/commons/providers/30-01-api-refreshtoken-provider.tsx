"use client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useAccessTokenStore } from "../stores/20-01-access-token-store";
import { onError } from "@apollo/client/link/error";
import { gql, GraphQLClient } from "graphql-request";
import { headers } from "next/headers";
import { getAccessToken } from "../libraries/30-01-get-access-token";

export default function ApiRefreshtokenProvider(props) {
  const { accessToken, setAccessToken } = useAccessTokenStore();

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. refreshTokendmfh accessToken 재발급받기

          return fromPromise(
            getAccessToken().then((newAcessToekn) => {
              // 3. 재발급 받은 accessToken 저장하고, 방금 실패한 쿼리 재요청하기
              setAccessToken(newAcessToekn);

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAcessToekn}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://main-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
