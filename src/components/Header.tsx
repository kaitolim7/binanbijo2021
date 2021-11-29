import { Box, Center, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import KadaiInfoLogo from "../../public/images/kadaiinfo_logo.png";
import Banner from "../../public/images/banner.jpg";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Header() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box>
      {isXl ? (
        <>
          <Center shadow="md">
            <Image src={KadaiInfoLogo} width={235} height={50} />
          </Center>
          <Flex justify="center" alignItems="center">
            <Image src={Banner} width={1010} height={260} />
          </Flex>
        </>
      ) : (
        <>
          <Center shadow="md">
            <Image src={KadaiInfoLogo} width={141} height={30} />
          </Center>
          <Image src={Banner} />
        </>
      )}
    </Box>
  );
}
