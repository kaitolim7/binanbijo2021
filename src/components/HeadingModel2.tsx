import { Box, Center } from "@chakra-ui/layout";
import HeadingModelImage2 from "../../public/svgs/headingmodel2.svg";
import MobileModelImage2 from "../../public/images/model2.png";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingModel2() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box>
      {isXl ? (
        <Image src={HeadingModelImage2} />
      ) : (
        <Center w={130} ml={4}>
          <Image src={MobileModelImage2} />
        </Center>
      )}
    </Box>
  );
}
