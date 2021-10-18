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
              top="-25"
              left="24%"
              zIndex="overlay"
              borderColor="black"
              border="2px"
              bgColor="white"
              fontSize="4xl"
              fontWeight="bold"
              padding="2"
            >
              No.1 さきっちょ
            </Text>
          ) : (
            <Text
              position="absolute"
              top="20px"
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
            <Center>
              <Image src={Test} width={540} height={400} />
            </Center>
          ) : (
            <Image src={Test} layout="responsive" />
          )}
        </Box>

        <Flex justify="flex-end">
          {isXl ? (
            <Text
              position="absolute"
              bottom="-20px"
              right="80"
              borderColor="black"
              border="2px"
              bgColor="white"
              fontSize="xl"
              fontWeight="bold"
              padding="2"
            >
              ● 教育学部 3年 ● 出身 / 鹿児島 ● サークル / -
            </Text>
          ) : (
            <Text
              position="absolute"
              bottom="-20px"
              borderColor="black"
              border="2px"
              borderEnd="inherit"
              bgColor="white"
              fontSize="sm"
              fontWeight="bold"
              padding="2"
            >
              ● 教育学部 3年 ● 出身 / 鹿児島 ● サークル / -
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
