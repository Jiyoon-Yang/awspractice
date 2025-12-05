"use client";
import { usePathname } from "next/navigation";
import Layoutbanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = [
  "/section04/04-aaa", //
  "/section04/04-02-css-module",
];

export default function Layout({ children }) {
  const pathname = usePathname();

  const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <Layoutbanner />
      <LayoutNavigation />
      <div
        style={{
          height: "500px",
          display: "flex",
        }}>
        <div
          style={{
            height: "30%",
            backgroundColor: "orange",
          }}>
          여기는 사이드바입니다.
        </div>
        <div
          style={{
            height: "70%",
          }}>
          {children}
        </div>
      </div>
      <LayoutFooter />
    </>
  );
}
