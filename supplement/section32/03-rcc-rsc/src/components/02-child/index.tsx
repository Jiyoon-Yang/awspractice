// "use client" 를 붙이진 않았지만, 부모가 RCC이므로, 자식도 RCC

export default function Child() {
  console.log("자식 컴포넌트가 렌더링되었습니다."); // 브라우저에서 찍히면? 브라우저에서 재실행됐다는 뜻: 클라이언트 컴포넌트
  return <div>저는 자식입니다.</div>;
}
