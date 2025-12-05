"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISchema, schema } from "./schma";

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: ISchema) => {
    console.log(data);
  };
  console.log("리렌더링 되나여?");
  return (
    <>
      <form onClick={handleSubmit(onClickSubmit)}>
        제목: <input type="text" {...register("title")} /> <br />
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        <br />
        내용: <input type="text" {...register("content")} /> <br />
        <div style={{ color: "red" }}>{formState.errors.content?.message}</div>
        <br />
        <button disabled={!formState.isValid}>게시글 등록하기</button>
        {/* <button type="button" onClick={onClickqqq}>게시글 등록하기</button> 폼 안에서 등록버튼 말고 다른 버튼 사용할 때 */}
      </form>
    </>
  );
}
