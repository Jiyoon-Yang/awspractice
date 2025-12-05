"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISchema, schema } from "./schma";
import MyButton from "@/app/commons/components/22-08-button-generic";
import MyInput from "@/app/commons/components/22-08-input-generic";

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
      <form onSubmit={handleSubmit(onClickSubmit)}>
        {/* 제목(함수):
        {MyInput<ISchema>({ type: "text", register: register, name: "title" })} */}
        <br />
        내용(컴포넌트): <MyInput<ISchema> type="text" register={register} name="title" />
        <br />
        <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
        <br />
        {/* 내용(함수):
        {MyInput<ISchema>({ type: "text", register: register, name: "contents" })} */}
        <br />
        내용(컴포넌트):
        <MyInput<ISchema> type="text" register={register} name="contents" /> <br />
        <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
        <br />
        <MyButton formState={formState}>게시글 등록하기</MyButton>
        {/* <button type="button" onClick={onClickqqq}>게시글 등록하기</button> 폼 안에서 등록버튼 말고 다른 버튼 사용할 때 */}
      </form>
    </>
  );
}
