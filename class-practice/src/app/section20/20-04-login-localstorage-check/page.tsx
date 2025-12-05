"use client";

import { useAccessTokenStore } from "@/app/commons/stores/20-01-access-token-store";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const { setAccessToken } = useAccessTokenStore();

  const onClickLogin = async () => {
    try {
      // 1. 로그인 뮤테이션 날려서 엑세스토큰 받아오기
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      ////
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 임시 사용 (나중에 refreshToken으로 대체 예정)
      ////
      // 2. 로그인 성공페이지로 이동하기
      router.push("/section20/20-04-login-localstorage-check-success");
      // 3.
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
