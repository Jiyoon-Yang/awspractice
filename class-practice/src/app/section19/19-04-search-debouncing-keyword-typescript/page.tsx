"use client";

import { FetchBoardsQuery } from "@/app/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, MouseEvent, useState } from "react";
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
  const { data, refetch } = useQuery<FetchBoardsQuery>(FETCH_BOARDS);
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({
      // 검색에서 refetch를 했을 때, keyword가 refetch에 이미 저장되어 있는 상태이므로, 굳이 안넣어도 됨, 추가로 keyword 포함하지 않아도 됨!
      page: Number(event.currentTarget.id),
    });
  };
  const getDebounce = _.debounce((value) => {
    refetch({
      search: value,
      page: 1,
    });
    setKeyword(value);
  }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <div>
        검색어입력:
        <input type="text" onChange={onChangeKeyword} />
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>
              {el.title
                .replaceAll(keyword, `#$%${keyword}#$%`)
                .split("#$%")
                .map((el, index) => (
                  <span
                    key={`${el}_${index}`}
                    style={{ color: el === keyword ? "red" : "black" }}>
                    {el}
                  </span>
                ))}
            </span>
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
