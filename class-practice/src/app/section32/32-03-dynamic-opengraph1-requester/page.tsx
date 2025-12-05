"use client";

//요청자 관점 => 카카오톡 개발자, 슬랙 개발자 등
export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    // 1. 채팅으로 입력된 문자열에 주소가 있는지  찾기 (http~로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기

    // fetch("https://www.naver.com"); // CORS문제 발생

    const 상품ID = "692fdec9d4299d0029cd3096";

    const result = await fetch(
      `http://localhost:3000/section32/32-03-dynamic-opengraph2-provider/${상품ID}`
    );
    const data = await result.text();
    console.log(data);
    // 3. 메타태그에서 오픈그래프(og: ~) 찾기
    const resultOg = data.split("<meta").filter((el) => el.includes('property="og:"'));
    console.log(resultOg);

    // 4. 오픈그래프에 담긴 title, image, description 등을 state에 담아서 화면에 렌더하기
  };

  return <button onClick={onClickScraping}>채팅 입력 후 엔터치기!!</button>;
}
