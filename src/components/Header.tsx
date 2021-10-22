import { Box, Center, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import KadaiInfoLogo from "../../public/svgs/kadaiinfo_logo.svg";
import KadaiInfoBox from "../../public/svgs/kadaiinfo_box.svg";

export default function Header() {
  return (
    <Box>
      <Center shadow="md">
        <Image src={KadaiInfoLogo} />
      </Center>
      <Box marginTop="1" />
      <Flex
        w="100%"
        h="180px"
        bgColor="#F7F5F5"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={KadaiInfoBox} width={90} height={148} />
      </Flex>
    </Box>
  );
}
