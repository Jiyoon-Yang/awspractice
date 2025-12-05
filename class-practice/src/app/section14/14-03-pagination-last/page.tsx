"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function PaginationPage() {
  const [startPage, setSartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount ?? 10 / 10);
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return; // early-exit pattern
    setSartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    // (startPage + 10 > lastPage) return 아래 식과 동일 but 이해하기 어려운 식은 그냥 if문 사용으로 이해 ↑↑↑
    if (startPage + 10 <= lastPage) {
      setSartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };
  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        ))}
        <button onClick={onClickPrevPage}>이전페이지</button>
        {new Array(10).fill("철수").map(
          (_, index) =>
            index + startPage <= lastPage && (
              <button
                id={String(index + startPage)}
                onClick={onClickPage}
                key={index + startPage}>
                {index + startPage}
              </button>
            )
        )}
        <button onClick={onClickNextPage}>다음페이지</button>
      </div>
    </>
  );
}
