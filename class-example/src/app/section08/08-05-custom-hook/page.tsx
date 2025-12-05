"use client";

import { useLoginCheck } from "@/app/commons/hooks/08-08-use-login-check";

export default function CustomHookPage() {
  const { loginCheck } = useLoginCheck;

  const onClickSubmit = () => {
    //로그인검사
    loginCheck();
    //상품 등록하기
  };
  return <button onClick={onClickSubmit}>상품 등록하기</button>;
}
