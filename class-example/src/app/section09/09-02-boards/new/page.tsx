"use client";

import BoardWrite from "@/app/commons/components/09-02-boards-write";

export default function BoardComponentNewPage() {
  return (
    // <>
    //   <h1>등록페이지</h1>
    //   제목: <input type="text" />
    //   내용: <input type="text" />
    //   <button>등록하기</button>
    // </>
    <BoardWrite isEdit={false} />
  );
}
