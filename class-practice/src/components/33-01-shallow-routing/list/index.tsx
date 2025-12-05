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

export default function List() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { mysearch: search },
  });

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
