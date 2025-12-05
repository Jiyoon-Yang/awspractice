import { lazy } from "react";

const BoardsDetailPage = lazy(() => import("remote-board/boards-detail"));

export default () => {
  return (
    <>
      <BoardsDetailPage />
    </>
  );
};
