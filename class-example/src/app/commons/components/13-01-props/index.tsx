"use client";

export default function Box({ children }) {
  return (
    <>
      <div>==========여기 아래는 컴포넌트 영역 ===========</div>
      <div>{children}</div>
      <div>==========여기 위는 컴포넌트 영역 ===========</div>
    </>
  );
}
