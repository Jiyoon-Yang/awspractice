"use client";

import { useCallback, useMemo, useState } from "react";

export default function ReRenderPage() {
  console.log("컴포넌트가 렌더링 되었습니다.");
  let countLet = 0;

  const [countState, setCountState] = useState(0);
  // let aaa = Math.random();
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log("카운트렛: ", countLet + 1);

    countLet += 1;
    //    countLet = countLet + 1;
  }, []);
  const onClickCountState = useCallback(() => {
    console.log("카운트스테이트: ", countState);
    //↓↓↓↓↓↓↓ 렌더 함수
    setCountState((prev) => prev + 1);
  }, []);
  //

  // 변형1) useMemo로 useCallback 만들기 응용
  const onClickCountState2 = useMemo(() => {
    return () => {
      console.log("카운트스테이트: ", countState);
      //↓↓↓↓↓↓↓ 렌더 함수
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1 올리기</button>
      <div>카운트(let): {countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기</button>

      {/* 변형1) useMemo로 useCallback 만들기 응용 */}
      <div>카운트(let): {countState}</div>
      <button onClick={onClickCountState2}>카운트(state)+1 올리기</button>
      {/* 변형2) 로직과 UI를 함께 쓰기*/}
      <div>카운트(let): {countState}</div>
      <button
        onClick={useCallback(() => {
          console.log("카운트스테이트: ", countState);
          //↓↓↓↓↓↓↓ 렌더 함수
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state)+1 올리기
      </button>
    </>
  );
}
