"use client";

import { usePagination } from "@/app/section14/14-04-pagination-last-refactoring/hook";

export default function Pagination(props) {
  const { startPage, onClickNextPage, onClickPage, onClickPrevPage } =
    usePagination(props);
  return (
    <div>
      <button onClick={onClickPrevPage}>이전페이지</button>
      {new Array(10).fill("철수").map(
        (_, index) =>
          index + startPage <= props.lastPage && (
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
  );
}
