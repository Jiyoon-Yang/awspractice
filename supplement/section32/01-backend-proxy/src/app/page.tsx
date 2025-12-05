"use client";
export default function Home() {
  const onClickScraping1 = async () => {
    const result = await fetch("https://www.naver.com");
    const data = await result.text();
    console.log(data); // CORS 에러
  };
  const onClickScraping2 = async () => {
    // 1. 내가 직접 만든 프록시 API
    // const result = await fetch("http://localhost:3000/mynaver1");
    // const data = await result.text();
    // console.log(data);
    // 2. 내가 직접 만든 프록시 API - 중간 middleware단 가로채기
    // const result = await fetch("http://localhost:3000/mynaver2");
    // const data = await result.text();
    // console.log(data);
    // 3. 내가 직접 만든 프록시 API - 앞단 next.config.mjs 설정으로 자동 구현
    const result = await fetch("http://localhost:3000/mynaver3");
    const data = await result.text();
    console.log(data);
  };
  return (
    <>
      <h1>테스트 페이지</h1>
      <button onClick={onClickScraping1}>스크래핑하기(프록시없이)</button>
      <br />
      <button onClick={onClickScraping2}>스크래핑하기(프록시경유)</button>
    </>
  );
}
