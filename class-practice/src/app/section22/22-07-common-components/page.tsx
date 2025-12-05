"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ISchema, schema } from "./schma";
import MyButton from "@/app/commons/components/22-07-button";
import MyInput from "@/app/commons/components/22-07-input";

export default function ReactHookFormAfterPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: ISchema) => {
    console.log(data);
  };
  console.log("리렌더링 되나요?");
  return (
    <>
      <FormProvider
        {...useForm({
          resolver: zodResolver(schema),
          mode: "onChange",
        })}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      >
        <form onSubmit={handleSubmit(onClickSubmit)}>
          제목: <MyInput type="text" register={register} name="title" /> <br />
          <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
          <br />
          내용: <MyInput type="text" register={register} name="contents" /> <br />
          <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
          <br />
          <MyButton formState={formState}>게시글 등록하기</MyButton>
          {/* <button type="button" onClick={onClickqqq}>게시글 등록하기</button> 폼 안에서 등록버튼 말고 다른 버튼 사용할 때 */}
        </form>
      </FormProvider>
    </>
  );
}
