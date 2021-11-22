import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import Image from "next/image";
import HeadingProfile from "./HeadingProfile";
import ProfileArrow from "../../public/svgs/profilearrow.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Test from "../../public/images/parker.jpeg";

export default function PersonalProfile() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box>
        <HeadingProfile />
        <Box marginTop="24px" />
        <Box marginLeft={["0", "0"]}>
          <Flex justify="center">
            <Box>
              <Text fontSize={["10", "20"]} paddingBottom={5}>
                ◯ 身長 / 165cm
              </Text>
              <Text fontSize={["10", "20"]} paddingY={5}>
                ◯ 好きな場所 / 家
              </Text>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなYouTube /</Text>
                <Text fontSize={["10", "20"]}>東海オンエア</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなブランド /</Text>
                <Text fontSize={["10", "20"]}>ANNA SUI</Text>
              </Box>
            </Box>
            <Box w={10} />
            <Image src={ProfileArrow} />
            <Box w={10} />
            <Box>
              <Box paddingBottom={3}>
                <Text fontSize={["10", "20"]}>◯ 趣味 /</Text>
                <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ マイブーム /</Text>
                <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 休日の過ごし方 /</Text>
                <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>
                  ◯ 将来の夢 /{" "}
                  <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
                </Text>
              </Box>
            </Box>
            <Box w={20} />
            <Image src={Test} width={400} height={300} />
          </Flex>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <HeadingProfile />
        <Box marginTop="24px" />
        <Box marginLeft={["0", "0"]}>
          <Flex>
            <Spacer />
            <Box>
              <Text fontSize={["10", "20"]} paddingBottom={5}>
                ◯ 身長 / 165cm
              </Text>
              <Text fontSize={["10", "20"]} paddingY={5}>
                ◯ 好きな場所 / 家
              </Text>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなYouTube /</Text>
                <Text fontSize={["10", "20"]}>東海オンエア</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなブランド /</Text>
                <Text fontSize={["10", "20"]}>ANNA SUI</Text>
              </Box>
            </Box>
            <Spacer />
            <Image src={ProfileArrow}></Image>
            <Spacer />
            <Box>
              <Box paddingBottom={3}>
                <Text fontSize={["10", "20"]}>◯ 趣味 /</Text>
                <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ マイブーム /</Text>
                <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 休日の過ごし方 /</Text>
                <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>
                  ◯ 将来の夢 /{" "}
                  <Text fontSize={["10", "20"]}>ひとりでYOUTUBE</Text>
                </Text>
              </Box>
            </Box>
            <Spacer />
          </Flex>
        </Box>
      </Box>
    );
  }
}
