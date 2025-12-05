"use client";

import { useEffect } from "react";

export default function HydrationBasePage() {
  //   alert("반가워요~!@@@@");
  //   localStorage.getItem("aaa");
  //   console.log("안녕하세요");

  //   if (process.browser) {
  //     console.log("나는 지금 브라우저다");
  //     alert("반가워요");
  //     localStorage.getItem("aaa");
  //   } else {
  //     console.log("나는 지금 프론트엔드서버다!!");
  //     alert("반가워요");
  //   }
  /////////////////////////////////////////////////
  //   if (typeof window !== "undefined") {
  //     console.log("나는 지금 브라우저다");
  //     alert("반가워요");
  //     localStorage.getItem("aaa");
  //   } else {
  //     console.log("나는 지금 프론트엔드서버다!!");
  //     alert("반가워요");
  //   }

  //클라이언트에서만 실행 (useEffect)
  useEffect(() => {
    console.log("나는 지금 브라우저다");
    alert("반가워요");
    localStorage.getItem("aaa");
  }, []);

  return <></>;
}
