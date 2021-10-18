import { Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import KadaiInfoBox from "../../public/images/kadaiinfobox.png";

export default function MenuBox() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Flex position="fixed" right="5" zIndex="overlay">
        <Image
          src={KadaiInfoBox}
          width={90}
          height={150}
          objectPosition="right"
        />
      </Flex>
    );
  } else {
    return (
      <Flex position="fixed" right="2.5" zIndex="overlay">
        <Image
          src={KadaiInfoBox}
          width={50}
          height={70}
          objectPosition="right"
        />
      </Flex>
    );
  }
}
