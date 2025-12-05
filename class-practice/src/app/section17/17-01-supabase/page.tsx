"use client";

import { supabase } from "@/commons/libraries/17-01-supabase";

export default function SupabasePage() {
  const onClickSubmit = async () => {
    const result = await supabase.from("board").insert({
      writer: "철수",
      title: "안녕하세요",
      content: "반갑습니다.",
    });
    console.log(result);
  };
  const onClickFetch = async () => {
    const { data } = await supabase.from("board").select("*");
    console.log(data);
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
