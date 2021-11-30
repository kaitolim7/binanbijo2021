import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
}
