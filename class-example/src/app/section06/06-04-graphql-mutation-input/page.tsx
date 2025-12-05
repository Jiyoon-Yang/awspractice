"use client";
import { useState, ChangeEvent } from "react";
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
  const [mywirterInput, setMywriterInput] = useState("");
  const [mytitleInput, setMytitleInput] = useState("");
  const [mycontentInput, setMycontentInput] = useState("");
  const [게시글등록API요청함수] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await 게시글등록API요청함수({
      variables: {
        //variables => $와 같음
        mywritter: mywirterInput,
        mytitle: mytitleInput,
        mycontent: mycontentInput,
      },
    });
    console.log(result);
  };

  const onChnageWirter = (event: ChangeEvent<HTMLInputElement>) => {
    setMywriterInput(event.target.value);
  };
  const onChnageTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMytitleInput(event.target.value);
  };
  const onChnageContent = (event: ChangeEvent<HTMLInputElement>) => {
    setMycontentInput(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChnageWirter} />
      <br />
      제목: <input type="text" onChange={onChnageTitle} />
      <br />
      내용: <input type="text" onChange={onChnageContent} />
      <br />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
