import { Link } from "react-router-dom";

const Bbb = () => {
  return (
    <>
      <div>Bbb페이지 입니다.</div>

      <Link to="/aaa">aaa로 갈래요</Link>

      <a href="/aaa">aaa로 갈래요</a>
    </>
  );
};

export default Bbb;
