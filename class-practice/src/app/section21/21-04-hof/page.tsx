"use client";

import { gql, useQuery } from "@apollo/client";

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
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
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
        {new Array(10).fill("철수").map((_, index) => (
          <button id={String(index + 1)} onClick={onClickPage} key={index + 1}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
