"use client";

import BoardWriteAdvanced from "@/app/commons/components/09-04-boards-write-advanced-container-presentational";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($qqq: Int) {
    fetchBoard(number: $qqq) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  const 내주소변수 = useParams(); // <- 문자열로 나옴
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      qqq: Number(내주소변수.number),
    },
  });
  const onClickMove = () => {
    router.push(`/section09/09-03-boards-advanced/${내주소변수.number}/edit`);
  };

  return (
    <>
      <div>
        이 텍스트는 페이지 컴포넌트의 것입니다. 서로 다른 컴포넌트들을 조합할 때
        사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것입니다. 서로 다른 컴포넌트들을 조합할 때
        사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것입니다. 서로 다른 컴포넌트들을 조합할 때
        사용함
      </div>
      <BoardWriteAdvanced isEdit={true} data={data} />
      <div>
        이 텍스트는 페이지 컴포넌트의 것입니다. 서로 다른 컴포넌트들을 조합할 때
        사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것입니다. 서로 다른 컴포넌트들을 조합할 때
        사용함
      </div>
      <div>
        이 텍스트는 페이지 컴포넌트의 것입니다. 서로 다른 컴포넌트들을 조합할 때
        사용함
      </div>
      |
    </>
  );
}
