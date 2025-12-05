import { useRouter } from "next/router";

export default function BoardsDetailPage() {
  const router = useRouter();

  return <>{router.query.boardId}번 게시글 상세입니다.</>;
}
