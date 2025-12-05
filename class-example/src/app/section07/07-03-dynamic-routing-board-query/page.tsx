"use client";

import { useRouter } from "next/navigation";

export default function DynamicRoutingBoardPage() {
  const router = useRouter();

  const onClickSubmit1 = () => {
    //   1. 게시글 등록하기
    alert("게시글 등록에 성공했어요!");
    router.push("/section07/07-03-dynamic-routing-board-query-moved/568");
  };
  const onClickSubmit2 = () => {
    //   1. 게시글 등록하기
    alert("게시글 등록에 성공했어요!");
    router.push("/section07/07-03-dynamic-routing-board-query-moved/569");
  };
  const onClickSubmit3 = () => {
    //   1. 게시글 등록하기
    alert("게시글 등록에 성공했어요!");
    router.push("/section07/07-0-dynamic-routing-board-query-moved/570");
  };
  return (
    <>
      <button onClick={onClickSubmit1}>568번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>569번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit3}>570번 게시글 등록하기</button>
      <br />
    </>
  );
}
