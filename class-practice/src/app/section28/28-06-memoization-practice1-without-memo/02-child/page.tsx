"use client";

import { Checkbox } from "antd";
import { memo } from "react";

interface RowProps {
  isChecked: boolean;
  num: number;
  onClickCheckItem: (num: number) => () => void;
}

function Row({ isChecked, num, onClickCheckItem }: RowProps) {
  console.log("rerender");
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div>
        <Checkbox onClick={onClickCheckItem(num)} checked={isChecked} />
      </div>
      {new Array(80).fill("데이타").map((el, index) => (
        <div key={index} style={{ width: "200px", flexShrink: 0 }}>
          {el}
        </div>
      ))}
    </div>
  );
}

export default memo(Row);
