import { Box } from "@chakra-ui/layout";
import Image from "next/image";
import BannerC from "../../public/images/banner_c_mobile.jpg";
import BannerCXl from "../../public/images/banner_c_desktop.jpg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useRouter } from "next/dist/client/router";
import { tapBanner } from "./GoogleTagManager";

export default function AdArea() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const router = useRouter();
  if (isXl) {
    return (
      <Image
        src={BannerCXl}
        width={540}
        height={180}
        onClick={() => {
          tapBanner("mayonaka no atelier");
          router.push("https://mecanbaco.theshop.jp/");
        }}
      />
    );
  } else {
    return (
      <Image
        src={BannerC}
        width={234}
        height={60}
        onClick={() => {
          tapBanner('mayonaka no atelier');
          router.push("https://mecanbaco.theshop.jp/");
        }}
      />
    );
  }
}
