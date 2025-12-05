"use client";

import { useState } from "react";

export default function ReRenderPage() {
  console.log("컴포넌트가 렌더링 되었습니다.");
  let countLet = 0;

  const [countState, setCountState] = useState(0);

  const onClickCountLet = () => {
    console.log("카운트렛: ", countLet + 1);

    countLet += 1;
    //    countLet = countLet + 1;
  };
  const onClickCountState = () => {
    console.log("카운트스테이트: ", countState);

    //↓↓↓↓↓↓↓ 렌더 함수
    setCountState(countState + 1);
  };
  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1 올리기</button>
      <div>카운트(let): {countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기</button>
    </>
  );
}
