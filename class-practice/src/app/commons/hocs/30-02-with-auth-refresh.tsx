import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoadedStore } from "../stores/30-02-loaded-stroe";
import { useAccessTokenStore } from "../stores/20-01-access-token-store";

export const withAuth = (컴포넌트) => () => {
  const router = useRouter();
  const { isLoaded } = useLoadedStore();
  const { accessToken } = useAccessTokenStore();
  useEffect(() => {
    if (isLoaded && !accessToken) {
      router.push("/section30/30-02-login-refreshtoken-refresh");
    }
  }, [isLoaded]);

  return (
    <>
      <컴포넌트 />
    </>
  );
};
