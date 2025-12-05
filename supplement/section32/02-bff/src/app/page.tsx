"use client";

export default function SupabasePage() {
  const onClickSubmit = async () => {
    const result = await fetch("/myapi/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        writer: "철수",
        title: "하이",
        content: "반가용",
      }),
    });
    const data = await result.json();

    console.log(data);
  };
  const onClickFetch = async () => {
    const result = await fetch("/myapi/boards");
    const data = await result.json();
    console.log(data);
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
