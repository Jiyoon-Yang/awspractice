"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const 내주소변수 = useParams(); // <- 문자열로 나옴

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      qqq: Number(내주소변수.qqq),
    },
  });
  return (
    <>
      <div>568번 게시글 상세페이지입니다.</div>
      <div>
        작성자:
        {data !== undefined ? data.fetchBoard.writer : "로딩중입니다..."}
      </div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </>
  );
}
