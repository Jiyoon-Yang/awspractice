import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphqlClient = new GraphQLClient(
      "https://main-practice.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAcessToekn = result.restoreAccessToken.accessToken;
    return newAcessToekn;
  } catch (error) {
    // ㅊ
  }
};
