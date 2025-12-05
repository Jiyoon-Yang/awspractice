"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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
        {data?.fetchBoards.map((el) => (
          <Link
            key={el._id}
            href={`/section31/31-04-web-editor-hook-form-xss-hydration/${el._id}`}
          >
            <div>
              <span>{el.title}</span>
              <span>{el.writer}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
