import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import HeadingProfile from "./HeadingProfile";
import ProfileArrow from "../../public/svgs/profilearrow.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Test from "../../public/images/parker.jpeg";

type Props = {
  tall: number;
  favoritePlace: string;
  favoriteYouTube: string;
  favoriteBland: string;
  hobby: string;
  myboom: string;
  holidays: string;
  dream: string;
};

export default function PersonalProfile(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box>
        <HeadingProfile />
        <Box marginTop="24px" />
        <Box marginLeft={["0", "0"]}>
          <Flex justify="center">
            <Box w={400}>
              <Text fontSize={["10", "20"]} paddingBottom={5}>
                ◯ 身長 / {props.tall}cm
              </Text>
              <Text fontSize={["10", "20"]} paddingY={5}>
                ◯ 好きな場所 / {props.favoritePlace}
              </Text>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなYouTube /</Text>
                <Text fontSize={["10", "20"]}>{props.favoriteYouTube}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなブランド /</Text>
                <Text fontSize={["10", "20"]}>{props.favoriteBland}</Text>
              </Box>
            </Box>
            <Box w={10} />
            <Image src={ProfileArrow} />
            <Box w={10} />
            <Box w={400}>
              <Box paddingBottom={3}>
                <Text fontSize={["10", "20"]}>◯ 趣味 /</Text>
                <Text fontSize={["10", "20"]}>{props.hobby}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ マイブーム /</Text>
                <Text fontSize={["10", "20"]}>{props.myboom}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 休日の過ごし方 /</Text>
                <Text fontSize={["10", "20"]}>{props.holidays}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>
                  ◯ 将来の夢 /{" "}
                  <Text fontSize={["10", "20"]}>{props.dream}</Text>
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
          <Flex justify="center">
            <Box w={130}>
              <Text fontSize={["10", "20"]} paddingBottom={5}>
                ◯ 身長 / {props.tall}cm
              </Text>
              <Text fontSize={["10", "20"]} paddingY={5}>
                ◯ 好きな場所 / {props.favoritePlace}
              </Text>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなYouTube /</Text>
                <Text fontSize={["10", "20"]}>{props.favoriteYouTube}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 好きなブランド /</Text>
                <Text fontSize={["10", "20"]}>{props.favoriteBland}</Text>
              </Box>
            </Box>
            <Box w={5} />
            <Image src={ProfileArrow} />
            <Box w={7} />
            <Box w={130}>
              <Box paddingBottom={3}>
                <Text fontSize={["10", "20"]}>◯ 趣味 /</Text>
                <Text fontSize={["10", "20"]}>{props.hobby}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ マイブーム /</Text>
                <Text fontSize={["10", "20"]}>{props.myboom}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>◯ 休日の過ごし方 /</Text>
                <Text fontSize={["10", "20"]}>{props.holidays}</Text>
              </Box>
              <Box paddingY={3}>
                <Text fontSize={["10", "20"]}>
                  ◯ 将来の夢 /{" "}
                  <Text fontSize={["10", "20"]}>{props.dream}</Text>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  }
}
