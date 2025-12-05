"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const onChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };
  const onClickSearch = () => {
    // 1. 과거방식 - state 끌어올리기 => props로 refetch 받기
    // refetch({
    //   mysearch: search,
    // });
    //
    // 2. 샬로우 라우팅
    //    => 페이지 변경 없이, URL만 변경하는 방식
    //    => URL관련 컴포넌트(usePathname, useSearchParams 등을 사용하는 컴포넌트만 리렌더)
    //    => pagerouter 버전에서는? router.push(이동할 주소, 옵션, {shallow: true})
    // 3. 샬로우 라우팅(앱라우터)
    window.history.pushState(null, "", `?search=${search}`);
    // 4. 샬로우 라우팅(뒤로 가기 기억 안할래)
    // window.history.replaceState(null, "", `?search=${search}`);
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
    </div>
  );
}
