"use client";

import { checkValidationFile } from "@/app/commons/libraries/18-03-validation";
import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

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
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = event?.target.files[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file, // file: file(event.targe.files[0] 과 동일)
      },
    });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url);
  };
  //////////////////////////게시글/////////////////////////////////
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          title: title,
          contents: content,
          password: "1234",
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={onClickSubmit}>게시글등록</button>
      <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContent} />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}>
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg, image/png" // 선택 자체가 안되게 막기
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
