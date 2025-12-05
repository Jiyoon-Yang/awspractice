"use client";

import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $mysearch: String) {
    fetchBoards(page: $page, search: $mysearch) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function Pagination() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { mysearch: search },
  });

  return (
    <div>
      {new Array(10).fill("철수").map((_, index) => (
        <button id={String(index + 1)} key={index + 1}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
