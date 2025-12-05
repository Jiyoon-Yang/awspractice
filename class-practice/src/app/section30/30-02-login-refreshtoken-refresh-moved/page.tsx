"use client";

import { withAuth } from "@/app/commons/hocs/30-02-with-auth-refresh";
import { gql, useApolloClient, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginRefreshtokenMovedPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}

export default withAuth(LoginRefreshtokenMovedPage);
