import { Box, Center, Heading } from "@chakra-ui/layout";
import MobileModelImage2 from "../../public/images/model2.png";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingModel2() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box>
      {isXl ? (
        <Center>
          <Heading>MODEL</Heading>
        </Center>
      ) : (
        <Center w={130}>
          <Image src={MobileModelImage2} />
        </Center>
      )}
    </Box>
  );
}
