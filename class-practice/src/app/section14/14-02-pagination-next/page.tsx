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

export default function PaginationPage() {
  const [startPage, setSartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  const onClickPrevPage = () => {
    setSartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    setSartPage(startPage + 10);
    refetch({ page: startPage + 10 });
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
        {new Array(10).fill("철수").map((_, index) => (
          <button
            id={String(index + startPage)}
            onClick={onClickPage}
            key={index + startPage}>
            {index + startPage}
          </button>
        ))}
        <button onClick={onClickNextPage}>다음페이지</button>
      </div>
    </>
  );
}
