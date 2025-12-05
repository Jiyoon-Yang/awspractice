"use client";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { FETCH_BOARD, myGraphqlEditSetting, myGraphqlSetting } from "./queries";
import { IMyvariables } from "./types";

export default function useBoardWriteAdvanced() {
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
    const myvariables: IMyvariables = {
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
      `/section09/09-05-boards-advanced-hooks/${result.data.updateBoard.number}`
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

  return {
    onChnageWirter: onChnageWirter,
    onChnageTitle: onChnageTitle,
    onChnageContent, // shorthand-property
    onClickSubmit, // shorthand-property
    onClickUpdate, // shorthand-property
  };
}
