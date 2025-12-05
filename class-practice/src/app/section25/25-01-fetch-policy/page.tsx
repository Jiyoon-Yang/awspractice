"use client";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

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
  const rouetr = useRouter();
  const onClickMove = () => {
    rouetr.push("/section25/25-01-fetch-policy-moved");
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
        <button onClick={onClickMove}>페이지 이동하기</button>
      </div>
    </>
  );
}
