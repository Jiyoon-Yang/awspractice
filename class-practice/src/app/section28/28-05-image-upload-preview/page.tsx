"use client";

import { useState } from "react";

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (event) => {
    const file = event.target.files[0];

    // 1. 임시URL 생성-1 => 내 컴퓨터에서만 가능(이미지주소: localhost로 시작함) - 용량 작음(간단한 주소 형식)
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시URL 생성-2 => 남의 컴퓨터에서도 가능(이미지주소: file형태로 되어있음) - 용량 큼(주소 자체가 이미지 사이즈. ex. 5MB)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") setImageUrl(event.target?.result);
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </>
  );
}
