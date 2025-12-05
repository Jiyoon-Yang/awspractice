"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

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

const UPDATE_BOARD = gql`
  mutation {
    updateBoard(boardId: "", password: "", updateBoardInput: { title: "", contents: "" })
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [] = useMutation(UPDATE_BOARD);

  const onClickUpdate = () => {};

  return (
    <div>
      {data?.fetchBoards.map((el: any) => {
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>;
      })}
      <button onClick={onClickUpdate}>데이터수정하기</button>
    </div>
  );
}
