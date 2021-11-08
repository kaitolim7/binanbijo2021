import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
import IntroContent from "../../public/svgs/intro_content.svg";
import IntroImage from "../../public/svgs/introduction.svg";

import Image from "next/image";
import HeadingVote from "../components/HeadingVote";
import HeadingSchedule from "../components/HeadingSchedule";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";

export default function Intro() {
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <Header />
      <Box marginTop="18px" />
      <Center>
        <Heading fontSize={30}>美男美女SNAP2021</Heading>
      </Center>
      <Center marginTop="6">
        <Image src={IntroContent} />
      </Center>
      <Image src={IntroImage} />
      <Flex justify={["center", "initial"]}>
        <HeadingVote />
      </Flex>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          投票説明画像
        </Text>
      </Flex>
      <Flex justify={["center", "initial"]}>
        <HeadingSchedule />
      </Flex>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          スケジュール表
        </Text>
      </Flex>
      <Flex justify={["initial", "initial"]} marginTop="8">
        <Heading paddingLeft="3" fontSize={24}>
          受賞
        </Heading>
      </Flex>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          景品紹介
        </Text>
      </Flex>
      <Box marginTop="12" />
      <IntroLinkBox text="TOPに戻る" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
