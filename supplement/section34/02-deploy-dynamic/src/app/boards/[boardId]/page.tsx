"use client";

import { useParams } from "next/navigation";

export default function BoardsDetailPage() {
  const params = useParams();
  return (
    <>
      <div>게시글 상세페이지입니다.</div>
      <div>게시글아이디:{params.boardId}</div>
    </>
  );
}
