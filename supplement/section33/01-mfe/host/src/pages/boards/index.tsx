import { lazy } from "react";

const BoardsPage = lazy(() => import("remote-board/boards"));

export default () => {
  return (
    <>
      <BoardsPage />
    </>
  );
};
