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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (index) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
        const tempUrls = [...imageUrls];
        tempUrls[index] = event.target?.result;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);
      }
    };
  };

  const onClickSubmit = async () => {
    // 1. 이미지 등록(uploadFile)
    // 1-1) 안좋은 예제 - await를 매번 기다려야함, 주의: for문도 똑같음, for 내에서 await 쓰지 않기
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const resultUrls = [
    //   resultFile0.data.uploadFile.url,
    //   resultFile1.data.uploadFile.url,
    //   resultFile2.data.uploadFile.url,
    // ];

    // 1-2) 좋은 예제 - Promise.all 사용
    const resultFiles = await Promise.all([
      uploadFile({ variables: { file: files[0] } }),
      uploadFile({ variables: { file: files[1] } }),
      uploadFile({ variables: { file: files[2] } }),
    ]);
    const resultUrls = resultFiles.map((el) => el.data.uploadFile.url); // [url[0],url[1],url[2]]

    // 2. 게시글 등록(createBoard)
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "작성자",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
