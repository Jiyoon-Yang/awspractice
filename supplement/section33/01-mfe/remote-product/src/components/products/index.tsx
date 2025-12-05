import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <div>상품 목록입니다.</div>
      <Link href="/products/1">1번 상품으로</Link>
      <br />
      <Link href="/products/2">2번 상품으로</Link>
      <br />
      <Link href="/products/3">3번 상품으로</Link>
    </>
  );
}
