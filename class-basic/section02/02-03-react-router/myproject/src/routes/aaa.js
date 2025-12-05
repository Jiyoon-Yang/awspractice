import { Link } from "react-router-dom";

const Aaa = () => {
  return (
    <>
      <div>Aaa페이지 입니다.</div>
      <Link to="/bbb">bbb로 갈래요</Link>
      <a href="/bbb">bbb로 갈래요 (새로고침됨)</a>
    </>
  );
};

export default Aaa;
