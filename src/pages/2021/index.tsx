import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Header from "../../components/Header";

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <Header title={""} disable={true} />;
}
