import { useRouter } from "next/navigation";

export const useLoginCheck = () => {
  const router = useRouter();

  const loginCheck기능 = () => {
    //  로그인 검증

    // 로그인 검증 실패 처리
    alert("로그인 먼저 해라");
    router.push("로그인페이지로 이동");
  };
  return {
    loginCheck: loginCheck기능,
  };
};
