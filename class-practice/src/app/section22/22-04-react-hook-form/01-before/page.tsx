"use client";

import { useState } from "react";

export default function ReactHookFormBeforePage() {
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
  const onClickSubmit = (event) => {
    //
  };
  console.log("리렌더링 되나여?");
  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContent} /> <br />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
