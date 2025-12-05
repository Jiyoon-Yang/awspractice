import { lazy } from "react";

const ProductsPage = lazy(() => import("remote-product/products"));

export default () => {
  return (
    <>
      <ProductsPage />
    </>
  );
};
