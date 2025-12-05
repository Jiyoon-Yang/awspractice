"use client";

import { gql, useApolloClient, useQuery } from "@apollo/client";
import Link from "next/link";
import _ from "lodash";

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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const client = useApolloClient();

  const prefetchBoardDebounce = _.debounce((boardId) => {
    client.query({
      query: FETCH_BOARD,
      variables: {
        boardId,
      },
    });
  }, 200);
  const prefetchBoard = (boardId) => () => {
    prefetchBoardDebounce(boardId);
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <Link key={el._id} href={`/section28/28-13-data-prefetch-moved/${el._id}`}>
            <div onMouseOver={prefetchBoard(el._id)}>
              <span>{el.title}</span>
              <span>{el.writer}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
