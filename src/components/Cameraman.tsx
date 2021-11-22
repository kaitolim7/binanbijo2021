import { Box, Center, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import Test from "../../public/images/parker.jpeg";
import Sns from "./Sns";

export default function Cameraman() {
  const isXl = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  if (isXl) {
    return (
      <Box>
        <Image className="rounded" src={Test} width={140} height={140} />
        <Center>
          <Text fontSize={20} fontWeight="bold">
            安
          </Text>
        </Center>
        <Box h={2} />
        <Center paddingLeft="2.5">
          <Sns />
        </Center>
        <Box marginBottom="3" />
      </Box>
    );
  } else {
    return (
      <Box>
        <Image className="rounded" src={Test} width={100} height={100} />
        <Center>
          <Text fontSize={20} fontWeight="bold">
            安
          </Text>
        </Center>
        <Center paddingLeft="2.5">
          <Sns />
        </Center>
        <Box marginBottom="3" />
      </Box>
    );
  }
}
