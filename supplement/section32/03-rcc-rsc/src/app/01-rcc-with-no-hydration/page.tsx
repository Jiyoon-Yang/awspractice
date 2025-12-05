// "use client"; // 서버 컴포넌트

export default function RScWithNoHydrationPage() {
  console.log("요청 완");
  return (
    <>
      <button>요청하기</button>
    </>
  );
}

// 1. 모든 컴포넌트를 RCC로 하면 안좋은 이유
//    - 불필요한 하이드레이션 발생 => "요청이 완료되었습니다." 브라우저에서 재실행됨
//    - 불필요한 하이드레이션을 위한 코드조각 다운로드로 인한 용량 증가

// 2. 모든 컴포넌트를 RSC로 할 수 없는 이류
//    - onClick, onChange,. useState, useQuery 등은 브라우저에서 수분공급이 이루어져야함
//    => 사실상 과거 React17에서는 모든 컴포넌트가 RCC임
