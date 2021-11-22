import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import PersonalSns from "./PersonalSns";
import Image from "next/image";
import Test from "../../public/images/parker.jpeg";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function PersonalTopImage() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box w="100%">
      <Box w="100%" position="relative">
        <Flex>
          {isXl ? (
            <Text
              position="absolute"
              top="4"
              left="28%"
              zIndex="overlay"
              borderColor="black"
              border="2px"
              bgColor="white"
              fontSize="3xl"
              fontWeight="bold"
              padding="2"
            >
              No.1 さきっちょ
            </Text>
          ) : (
            <Text
              position="absolute"
              top="4"
              zIndex="overlay"
              borderColor="black"
              border="2px"
              borderStart={["inherit", "unset"]}
              bgColor="white"
              fontSize="2xl"
              fontWeight="bold"
              padding="2"
            >
              No.1 さきっちょ
            </Text>
          )}
          <Spacer />
          <PersonalSns />
        </Flex>

        <Box w="100%" h="100%" position="relative">
          {isXl ? (
            <Center mt={16}>
              <Image src={Test} width={540} height={400} />
            </Center>
          ) : (
            <Image src={Test} layout="responsive" />
          )}
        </Box>

        <Flex justify={["flex-end", "center"]}>
          {isXl ? (
            <Text fontSize="md" fontWeight="bold" padding="2" ml={96}>
              ⚫ 教育学部 3年 &nbsp;&nbsp;⚫ 出身 / 鹿児島&nbsp;&nbsp; ⚫
              サークル / -
            </Text>
          ) : (
            <Text fontSize="sm" fontWeight="bold" padding="2">
              ⚫ 教育学部 3年 &nbsp;&nbsp;⚫ 出身 / 鹿児島&nbsp;&nbsp; ⚫
              サークル / -
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
