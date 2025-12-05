"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function IsSubmitingPage() {
  // 리액트 훅 폼에 이 만들어져 있음
  // const { formState } = useForm()
  // formState.isSubmitting

  const [IsSubmiting, setIsSubmiting] = useState(false);

  const onClickSubmit = async () => {
    // 1. 버튼 비활성화 시키기
    setIsSubmiting(true);

    // 2. 게시글 등록하기 등의 api요청
    const result = await fetch("http://main-example.codebootcamp.co.kr/profile/철수");
    const data = await result.json();
    console.log(data);
    // 3. 버튼 비활성화 풀기
    setIsSubmiting(false);
  };
  return (
    <button onClick={onClickSubmit} disabled={IsSubmiting}>
      게시글 등록하기
    </button>
  );
}
