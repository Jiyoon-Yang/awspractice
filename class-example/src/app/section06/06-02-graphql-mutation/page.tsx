"use client";

import { gql, useMutation } from "@apollo/client";

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "철수", title: "하이루", contents: "캬캬") {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [게시글등록API요청함수] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수();
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPH-API 요청하기</button>
    </>
  );
}
