"use client";

import { useState } from "react";

export default function PrevStatePage() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </>
  );
}
