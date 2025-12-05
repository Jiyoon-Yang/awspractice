"use client";

import { withAuth } from "@/app/commons/hocs/21-05-with-auth";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default withAuth(function LoginSueccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      <>{data?.fetchUserLoggedIn.name}님 환영합니다~!</>
    </>
  );
});
