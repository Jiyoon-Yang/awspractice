export async function middleware(request) {
  if (request.nextUrl.pathname === "/myname2") {
    console.log("넥스트 서버에 요청하셨군요!");

    const result = await fetch("https://www.naver.com");
    const data = await result.text();

    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  }
}

export const config = {
  matcher: ["/mynaver2"],
};
