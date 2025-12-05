"use client";

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
