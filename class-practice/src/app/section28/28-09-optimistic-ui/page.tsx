"use client";

import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUiPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "691a9686d4299d0029cd296e",
    },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: "691a9686d4299d0029cd296e",
      },
      //   refetchQueries: [{ query: FETCH_BOARD }],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: {
            boardId: "691a9686d4299d0029cd296e",
          },
          data: {
            fetchBoard: {
              _id: "691a9686d4299d0029cd296e",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
        data.likeBoard; // 좋아요 갯수(8개 가정)
      },
    });
  };
  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount ?? 0}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
