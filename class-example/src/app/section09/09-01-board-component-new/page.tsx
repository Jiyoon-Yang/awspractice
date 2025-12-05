"use client";

import BoardComponentWrite from "@/app/commons/components/09-01-board-components-write";

export default function BoardComponentNewPage() {
  return (
    // <>
    //   <h1>등록페이지</h1>
    //   제목: <input type="text" />
    //   내용: <input type="text" />
    //   <button>등록하기</button>
    // </>
    <BoardComponentWrite isEdit={false} />
  );
}
