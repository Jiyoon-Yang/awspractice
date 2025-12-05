"use client";

import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginRefreshtokenMovedPage() {
  const client = useApolloClient();

  const onClickProfile = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
  };
  return (
    <>
      <button onClick={onClickProfile}>프로필 조회하기</button>
    </>
  );
}
