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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery(FETCH_BOARDS);
  const onClickEdit = (event) => {
    const qqq = [...myIndex];
    qqq[Number(event.target.id)] = true;
    setMyIndex(qqq);
  };
  return (
    <>
      <div>
        {data?.fetchBoards.map((el, index) =>
          myIndex[index] === true ? (
            <div key={el._id}>
              <input />
            </div>
          ) : (
            <div key={el._id}>
              <span>{el.title}</span>
              <span>{el.writer}</span>
              <button id={index} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}
