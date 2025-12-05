"use client";

import BoardComponentWrite from "@/app/commons/components/09-01-board-components-write";

export default function BoardComponentEditPage() {
  return (
    // <>
    //   <h1>수정페이지</h1>
    //   제목: <input type="text" />
    //   내용: <input type="text" />
    //   <button>수정하기</button>
    // </>
    <BoardComponentWrite isEdit={true} />
  );
}
