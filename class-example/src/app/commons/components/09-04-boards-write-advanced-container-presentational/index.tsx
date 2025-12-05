"use client";
import { useState, ChangeEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";

export default function BoardWriteAdvanced(props) {
  const 내주소변수 = useParams();
  const router = useRouter();
  const [mywirterInput, setMywriterInput] = useState("");
  const [mytitleInput, setMytitleInput] = useState("");
  const [mycontentInput, setMycontentInput] = useState("");
  const [게시글등록API요청함수] = useMutation(myGraphqlSetting);
  const [게시글수정API요청함수] = useMutation(myGraphqlEditSetting);

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
    router.push(
      `/section09/09-03-boards-advanced/${result.data.createBoard.number}`
    );
  };
  const onClickUpdate = async () => {
    const myvariables = {
      mynumber: Number(내주소변수.number),
    };
    if (mywirterInput !== "") myvariables.mywriter = mywirterInput;
    if (mytitleInput !== "") myvariables.mytitle = mytitleInput;
    if (mycontentInput !== "") myvariables.mycontent = mycontentInput;

    const result = await 게시글수정API요청함수({
      // variables: {
      //   //variables => $와 같음
      //   mynumber: Number(내주소변수.number),
      //   mywritter: mywirterInput,
      //   mytitle: mytitleInput,
      //   mycontent: mycontentInput,
      // },
      variables: myvariables,
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            qqq: Number(내주소변수.number),
          },
        },
      ],
    });
    console.log(result);
    router.push(
      `/section09/09-03-boards-advanced/${result.data.updateBoard.number}`
    );
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
      작성자:
      <input
        type="text"
        onChange={onChnageWirter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:
      <input
        type="text"
        onChange={onChnageTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:
      <input
        type="text"
        onChange={onChnageContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit === true ? onClickUpdate : onClickSubmit}>
        게시글 {props.isEdit === true ? "수정" : "등록"}하기
      </button>
    </>
  );
}
