"use client";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import BoardWriteAdvancedUI from "./board-write-advanced.presenter";
import {
  FETCH_BOARD,
  myGraphqlEditSetting,
  myGraphqlSetting,
} from "./board-write-advanced.queries";

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
      <div>이 텍스트는 컨테이너 컴포넌트의 것입니다.</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것입니다.</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것입니다.</div>
      <BoardWriteAdvancedUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChnageWirter={onChnageWirter}
        onChnageTitle={onChnageTitle}
        onChnageContent={onChnageContent}
        data={props.data}
        isEdit={props.isEdit}
      />
      <div>이 텍스트는 컨테이너 컴포넌트의 것입니다.</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것입니다.</div>
      <div>이 텍스트는 컨테이너 컴포넌트의 것입니다.</div>
    </>
  );
}
