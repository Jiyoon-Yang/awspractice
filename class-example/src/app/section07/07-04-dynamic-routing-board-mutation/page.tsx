"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "철수", title: "하이루", contents: "끼끼끼끼") {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [게시글등록API요청함수] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    try {
      // try에 있는 내용을 시도하다가 실패하면 다음에 있는 모든 줄을 무시함
      const result = await 게시글등록API요청함수();
      console.log(result);
      console.log(result.data.createBoard.number);

      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error);
    } finally {
      //성공하던 실패하던 항상 실행됨
    }
  };

  return (
    <>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
