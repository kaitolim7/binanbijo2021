import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import Test from "../../public/images/parker.jpeg";
export default function PersonalInterview() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box>
      <Heading fontSize="2xl" marginLeft={["0", "80"]}>
        一 INTERVIEW①
      </Heading>
      <Box marginTop="24px" />
      <Box marginLeft={["8", "96"]}>
        <Text fontSize={["xs", "md"]} paddingBottom="2">
          ◯ 休日の過ごし方 / ひとりでYOUTUBE
        </Text>
        <Text fontSize={["xs", "md"]} paddingY="2">
          ◯ 休日の過ごし方 / ひとりでYOUTUBE
        </Text>
        <Text fontSize={["xs", "md"]} paddingY="2">
          ◯ 休日の過ごし方 / ひとりでYOUTUBE
        </Text>
        <Text fontSize={["xs", "md"]} paddingY="2">
          ◯ 休日の過ごし方 / ひとりでYOUTUBE
        </Text>
        <Text fontSize={["xs", "md"]} paddingY="2">
          ◯ 休日の過ごし方 / ひとりでYOUTUBE
        </Text>
      </Box>
      <Box marginTop="24px" />

      {isXl ? (
        <Box marginLeft="80">
          <Flex>
            <Image src={Test} width={540} height={400} />
            <Box>
              <Heading fontSize="2xl" marginLeft="44">
                INTERVIEW② 一
              </Heading>
              <Box marginTop="24px" />
              <Box marginLeft="16">
                <Text fontSize={["xs", "md"]} paddingBottom="2">
                  ◯ 休日の過ごし方 / ひとりでYOUTUBE
                </Text>
                <Text fontSize={["xs", "md"]} paddingY="2">
                  ◯ 休日の過ごし方 / ひとりでYOUTUBE
                </Text>
                <Text fontSize={["xs", "md"]} paddingY="2">
                  ◯ 休日の過ごし方 / ひとりでYOUTUBE
                </Text>
                <Text fontSize={["xs", "md"]} paddingY="2">
                  ◯ 休日の過ごし方 / ひとりでYOUTUBE
                </Text>
                <Text fontSize={["xs", "md"]} paddingY="2">
                  ◯ 休日の過ごし方 / ひとりでYOUTUBE
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Flex flexDir={["column", "row"]}>
          <Box w="100%" h="100%">
            <Image src={Test} layout="responsive" />
          </Box>
          <Box marginTop="56px" />
          <Box>
            <Heading fontSize="2xl">一 INTERVIEW②</Heading>
            <Box marginTop="24px" />
            <Box marginLeft="8">
              <Text fontSize="xs" paddingBottom="2">
                ◯ 休日の過ごし方 / ひとりごそごそ
              </Text>
              <Text fontSize="xs" paddingY="2">
                ◯ 休日の過ごし方 / ひとりごそごそ
              </Text>
              <Text fontSize="xs" paddingY="2">
                ◯ 休日の過ごし方 / ひとりごそごそ
              </Text>
              <Text fontSize="xs" paddingY="2">
                ◯ 休日の過ごし方 / ひとりごそごそ
              </Text>
              <Text fontSize="xs" paddingY="2">
                ◯ 休日の過ごし方 / ひとりごそごそ
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
