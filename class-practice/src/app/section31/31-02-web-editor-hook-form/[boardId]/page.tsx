"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoadr($boardId: ID!) {
    fetchBoadr(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: params.boardId,
    },
  });

  return (
    <>
      <div>작성자: {data?.fetchboard.writer}</div>
      <div>제목: {data?.fetchboard.title}</div>
      {/* <div>내용: {data?.fetchboard.contents}</div> */}
      <div dangerouslySetInnerHTML={{ __html: data?.fetchboard.contents }} />
    </>
  );
}
