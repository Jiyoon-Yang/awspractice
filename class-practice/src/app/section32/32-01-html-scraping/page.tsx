"use client";

export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    // fetch("https://www.naver.com"); // CORS문제 발생

    const result = await fetch("https://vibe-coding-supabase-kwtm.vercel.app/magazines");
    const data = await result.text();
    console.log(data);
  };

  return <button onClick={onClickScraping}>긁어오기</button>;
}
