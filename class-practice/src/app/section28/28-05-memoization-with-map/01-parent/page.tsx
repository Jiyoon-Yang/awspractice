"use client";

import { useState } from "react";
import Word from "../02-child/page";

export default function MemoizationWithPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");
  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 없었습니다.");
  };
  return (
    <>
      {/* memo시 변경된 부분만 리렌더링 됨 */}
      {/* {data.split(" ").map((el, index) => (
        <div key={el}>
          <Word el={el} />
        </div>
      ))} */}

      {/* memo했더라도, key가 바뀌면 리렌더링됨 */}
      {data.split(" ").map((el, index) => (
        <Word key={Math.random} el={el} />
      ))}
      <button onClick={onClickChange}>문장 변경하기</button>
    </>
  );
}
