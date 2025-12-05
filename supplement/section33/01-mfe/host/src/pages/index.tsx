import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>철수네 홈페이지에 오신 것을 환영합니다.</div>
      <Link href="/boards">게시글 목록</Link>
      <Link href="/products">상품 목록</Link>
    </>
  );
}
