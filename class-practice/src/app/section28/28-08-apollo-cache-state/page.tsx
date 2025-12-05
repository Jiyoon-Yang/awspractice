"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

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
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const [deletBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickSubmit = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "12334",
          title: "제목이에요",
          contents: "내용이에요",
        },
      },
      // refetchQueries: [{query: FETCH_BOARDS}]
      update(cache, data) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  const onClickDelete = (boardId) => () => {
    deletBoard({
      variables: { boardId },
      //   refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard; // _id => 삭제 완료된 ID
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <button onClick={onClickDelete(el._id)}>삭제하기</button>
          </div>
        ))}
        <button onClick={onClickSubmit}>등록하기</button>
      </div>
    </>
  );
}
