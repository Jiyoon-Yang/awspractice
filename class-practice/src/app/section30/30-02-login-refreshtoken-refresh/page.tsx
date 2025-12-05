"use client";

import { useAccessTokenStore } from "@/app/commons/stores/20-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginRefreshtokenRefreshPage() {
  const router = useRouter();
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    const result = await loginUserExample({
      variables: {
        email: "jiyoon@aaa.com",
        password: "123",
      },
    });
    const accessToken = result.data?.loginUserExample.accessToken;
    console.log(accessToken);
    setAccessToken(accessToken);
    router.push("/section30/30-02-login-refreshtoken-refresh-moved");
  };
  return (
    <>
      이메일: <input type="text" />
      비밀번호: <input type="password" />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
