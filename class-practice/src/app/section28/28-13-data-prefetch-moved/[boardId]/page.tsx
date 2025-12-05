"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function OptimisticUiPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: params.boardId,
    },
    fetchPolicy: "cache-first", // 캐쉬 퍼스트는 디폴트라 생략 가능
  });

  return (
    <>
      <div>작성자:{data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </>
  );
}
