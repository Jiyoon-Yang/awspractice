"use client";

import { useCallback, useState } from "react";
import Row from "../02-child/page";

export default function MemoizationPracticePage() {
  const [checkList, setCheckList] = useState<number[]>([]);

  //   const onClickCheckItem = (num) => () => {
  // const isChecked = checkList.includes(num);
  // 리렌더시 매번 새로운 함수가 만들어짐 => 이 함수를 전달받는 자식에 memo가 걸려있어도 무시됨
  //     if (isChecked) {
  //       setCheckList([...checkList.filter((el) => el !== num)]);
  //     } else {
  //       setCheckList([...checkList, num]);
  //     }
  //   };

  // 리렌더시 다시 새로운 함수를 만들지 않고ㅡ 기존의 함수를 재사용하기 => 이 함수를 전달받는 자식에 memo가 걸려있는 경우
  const onClickCheckItem = useCallback(
    (num: number) => () => {
      setCheckList((prev) => {
        const isChecked = prev.includes(num);

        if (isChecked) {
          return [...prev.filter((el) => el !== num)];
        } else {
          return [...prev, num];
        }
      });
    },
    []
  );

  return (
    <div style={{ height: "500px", overflow: "scroll" }}>
      {new Array(1000).fill(1).map((el, index) => (
        <Row
          key={index + 1}
          num={index + 1}
          onClickCheckItem={onClickCheckItem}
          isChecked={checkList.includes(index + 1)}
        />
      ))}
    </div>
  );
}
