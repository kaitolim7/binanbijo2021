import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box, Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function ImageSliderItem() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Center mx={3} p={3}>
        <Image src={Test} />
      </Center>
    );
  } else {
    return (
      <Center mx={3} p={3}>
        <Image src={Test} />
      </Center>
    );
  }
}
