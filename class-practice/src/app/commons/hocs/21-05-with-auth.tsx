import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const withAuth = (컴포넌트) => () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!!!!!!!!!!!!");
      router.push("/section21/21-05-login-localstorage-check-hoc");
    }
  }, []);

  return (
    <>
      <컴포넌트 />
    </>
  );
};
