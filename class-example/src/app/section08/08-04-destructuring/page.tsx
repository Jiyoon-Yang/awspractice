"use client";

import { useState } from "react";

export default function CouterPage() {
  const 나의변수 = useState(0);

  const onCLickCountUp = () => {
    나의변수[1](나의변수[0] + 1);
  };
  return (
    <div>
      <div>{나의변수[0]}</div>
      <button onClick={onCLickCountUp}>카운트 증가</button>
    </div>
  );
}
