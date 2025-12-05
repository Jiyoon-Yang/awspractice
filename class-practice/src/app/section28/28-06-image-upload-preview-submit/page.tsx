"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 1. 임시URL 생성-1 => 내 컴퓨터에서만 가능(이미지주소: localhost로 시작함) - 용량 작음(간단한 주소 형식)
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시URL 생성-2 => 남의 컴퓨터에서도 가능(이미지주소: file형태로 되어있음) - 용량 큼(주소 자체가 이미지 사이즈. ex. 5MB)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  const onClickSubmit = async () => {
    // 1. 이미지 등록(uploadFile)
    const resultFile = await uploadFile({ variables: { file: file } });
    const url = resultFile.data.uploadFile.url;
    // 2. 게시글 등록(createBoard)
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "작성자",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: [url],
        },
      },
    });
    console.log(result);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
