import { lazy } from "react";

const ProductsDetailPage = lazy(() => import("remote-product/products"));

export default () => {
  return (
    <>
      <ProductsDetailPage />
    </>
  );
};
