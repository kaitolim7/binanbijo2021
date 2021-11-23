import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box, Center, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function ImageSliderItem() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Center
        mx={3}
        p={3}
        _hover={{
          // bgColor: "#250B0D",
          opacity: "0.7",
        }}
      >
        <Image src={Test} />
      </Center>
    );
  } else {
    return (
      <Center
        mx={3}
        p={3}
        _hover={{
          // bgColor: "#250B0D",
          opacity: "0.7",
        }}
      >
        <Image src={Test} />
      </Center>
    );
  }
}
