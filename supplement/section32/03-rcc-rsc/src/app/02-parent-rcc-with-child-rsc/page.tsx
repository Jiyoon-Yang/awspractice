"use client";
import Child from "@/components/02-child";

// 클라이언트 컴포넌트

export default function ParentPage() {
  console.log("부모 컴포넌트가 렌더링되었습니다.");
  return (
    <>
      <div>저는 부모입니다.</div>
      <Child />
    </>
  );
}

// 교훈: 부모가 RCC면, 자식도 RCC가 되므로,
//      페이지 컴포넌트가 RCC이면, 하위 컴포넌트는 모두 RCC가 됨
//      따라서, 페이지 컴포넌트는 가급적 RSC로 적용하자
