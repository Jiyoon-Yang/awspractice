"use client";

import { useState } from "react";

export default function PrevStatePage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    //   setCount(count + 1);

    setCount((prev) => {
      //여기에 로직 작성 가능
      return prev + 1;
    });
    setCount((prev) => prev + 1); // return 생략 가능
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </>
  );
}
