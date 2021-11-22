import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
import IntroContent from "../../public/svgs/intro_content.svg";
import IntroContentXl from "../../public/svgs/intro_contentxl.svg";
import IntroImage from "../../public/svgs/introduction.svg";
import IntroXlImage from "../../public/svgs/introductionxl.svg";
import Image from "next/image";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import HowToVote from "../components/HowToVote";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Intro() {
  const isXl = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <Header />
      <Box marginTop={[6, 12]} />
      <Center>
        <Heading fontSize={30}>美男美女SNAP2021</Heading>
      </Center>
      <Center marginTop={[6, 0]}>
        {isXl ? (
          <Image src={IntroContentXl} width={1000} height={800} />
        ) : (
          <Image src={IntroContent} />
        )}
      </Center>
      <Center marginTop={[6, 0]}>
        {isXl ? (
          <Image src={IntroXlImage} height={360} />
        ) : (
          <Image src={IntroImage} />
        )}
      </Center>
      <Box marginTop="36px" />
      <Heading marginLeft={[6, 96]} pl={[0, 40]} fontSize={24}>
        投票方法
      </Heading>
      <Flex justify={["initial", "center"]}>
        <HowToVote />
      </Flex>
      <Box marginTop="36px" />
      <Heading marginLeft={[6, 96]} pl={[0, 40]} fontSize={24}>
        SCHEDULE
      </Heading>
      <Flex justify={["initial", "center"]}>
        <Schedule />
      </Flex>
      <Box marginTop="36px" />
      <Heading marginLeft={[6, 96]} pl={[0, 56]} fontSize={24}>
        受賞
      </Heading>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          景品紹介
        </Text>
      </Flex>
      <Box marginTop="12" />
      <IntroLinkBox text="TOPに戻る" topage="/" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
