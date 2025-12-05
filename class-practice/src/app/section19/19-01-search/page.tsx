"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickPage = (event) => {
    refetch({
      // 검색에서 refetch를 했을 때, keyword가 refetch에 이미 저장되어 있는 상태이므로, 굳이 안넣어도 됨, 추가로 keyword 포함하지 않아도 됨!
      page: Number(event.target.id),
    });
  };

  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
    console.log(keyword);
  };
  const onClickSearch = () => {
    refetch({
      search: keyword,
      page: 1,
    });
  };
  return (
    <>
      <div>
        검색어입력:
        <input type="text" onChange={onChangeKeyword} />
        <button onClick={onClickSearch}>검색하기</button>
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
