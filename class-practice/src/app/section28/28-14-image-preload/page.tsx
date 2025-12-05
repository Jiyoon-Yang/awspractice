"use client";

import Link from "next/link";
import { useEffect } from "react";
const qqq = [];

export default function ImagePreloadPage() {
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  return <Link href={"/section28/28-14-image-preload-moved"}>이벤트 페이지로 이동</Link>;
}
