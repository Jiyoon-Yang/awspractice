"use client";

import { useForm } from "react-hook-form";

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit } = useForm();
  const onClickSubmit = (data) => {
    console.log(data);
  };
  console.log("리렌더링 되나여?");
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} /> <br />
        제목: <input type="text" {...register("title")} /> <br />
        내용: <input type="text" {...register("content")} /> <br />
        <button type="submit">게시글 등록하기</button>
        {/* <button type="button" onClick={onClickqqq}>게시글 등록하기</button> */}
      </form>
    </>
  );
}
