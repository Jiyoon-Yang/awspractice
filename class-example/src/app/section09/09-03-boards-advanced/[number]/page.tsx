"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      qqq: Number(내주소변수.number),
    },
  });
  const onClickMove = () => {
    router.push(`/section09/09-03-boards-advanced/${내주소변수.number}/edit`);
  };

  return (
    <>
      <div>{내주소변수.number}번 게시글 상세페이지입니다.</div>
      <div>
        작성자:
        {data !== undefined ? data.fetchBoard.writer : "로딩중입니다..."}
      </div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
      <button onClick={onClickMove}>수정하러가기</button>
    </>
  );
}
