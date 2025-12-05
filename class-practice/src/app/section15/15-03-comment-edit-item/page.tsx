"use client";

import CommentItem from "@/components/15-03-comment-edit-item";
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
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      <div>
        {data?.fetchBoards.map((el, index) => (
          <CommentItem key={el._id} el={el} />
        ))}
      </div>
    </>
  );
}
