"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($mynumber: Int) {
    deleteBoard(number: $mynumber) {
      message
    }
  }
`;

export default function MapBoardsDeletePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards); // [{ number:1, wirter: "철수", ... }  10개 들어옴]

  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        mynumber: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    alert("삭제완료!");
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => {
        //1. key와 index
        // => index는 게시글을 삭제핟거라도, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖음
        //   => 따라서, 유일하지 않음

        //2. Fragment
        //   => 프레그먼트로 감싸는 경우, <div />처럼 영역을 생성하지 않음
        //   => 프레그먼트 사용헙 : <></>, <Fragment></Fragment>
        // => 프레그먼트에 key를 입력하려면 , <Fragment key={1}></Fragment>
        return (
          <div key={el.number}>
            <span>
              <input type="checkbox" />
            </span>
            <span>{el.number}</span>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <span>
              <button id={el.number} onClick={onClickDelete}>
                삭제
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
