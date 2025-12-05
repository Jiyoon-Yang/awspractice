"use client";

import { gql, useMutation } from "@apollo/client";

const myGraphqlSetting = gql`
  # 변수의 타입 적는곳
  mutation createBoard(
    $mywritter: String
    $mytitle: String
    $mycontent: String
  ) {
    # 실제 우리가 전달할 변수 적는 곳
    createBoard(writer: $mywritter, title: $mytitle, contents: $mycontent) {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [게시글등록API요청함수] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수({
      variables: {
        //variables => $와 같음
        mywritter: "훈이",
        mytitle: "안녕하세요",
        mycontent: "반갑습니다",
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPH-API 요청하기</button>
    </>
  );
}
