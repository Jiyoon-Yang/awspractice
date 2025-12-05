import Link from "next/link";

export default function BoardsPage() {
  return (
    <>
      <div>게시글 목록입니다.</div>
      <Link href="/boards/1">1번 게시글로</Link>
      <br />
      <Link href="/boards/2">2번 게시글로</Link>
      <br />
      <Link href="/boards/3">3번 게시글로</Link>
    </>
  );
}
