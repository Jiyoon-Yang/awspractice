export function GET() {
  console.log("넥스트 서버에 요청하셨군요!");

  return new Response(
    JSON.stringify({
      message: "요청에 성공하였습니다",
      mydata: "banana",
    }),
    {
      status: 200,
    }
  );
}
