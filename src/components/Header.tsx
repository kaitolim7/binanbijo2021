import { Box, Center, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import KadaiInfoLogo from "../../public/svgs/kadaiinfo_logo.svg";

import Banner from "../../public/images/banner.jpg";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Header() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box>
      <Center shadow="md">
        <Image src={KadaiInfoLogo} />
      </Center>
      {isXl ? (
        <Flex justify="center" alignItems="center">
          <Image src={Banner} width={1010} height={260} />
        </Flex>
      ) : (
        <Image src={Banner} />
      )}
    </Box>
  );
}
