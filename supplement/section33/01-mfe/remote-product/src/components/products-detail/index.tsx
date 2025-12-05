import { useRouter } from "next/router";

export default function ProductsDetailPage() {
  const router = useRouter();

  return <>{router.query.productsId}번 상품 상세입니다.</>;
}
