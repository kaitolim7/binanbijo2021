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
import GiftImage from "../../public/images/gift.png";

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
      <Header title={"企画説明"} disable={false} />
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
          <Image src={IntroXlImage} height={380} />
        ) : (
          <Image src={IntroImage} />
        )}
      </Center>
      <Box marginTop="36px" />
      <Heading marginLeft={[6, "72"]} pl={[0, 40]} fontSize={24}>
        投票方法
      </Heading>
      <Flex justify="center">
        <HowToVote />
      </Flex>
      <Box marginTop="36px" />
      <Heading marginLeft={[6, "72"]} pl={[0, 40]} fontSize={24}>
        SCHEDULE
      </Heading>
      <Flex justify="center">
        <Schedule />
      </Flex>
      <Box marginTop={"36px"} />
      <Heading marginLeft={[6, 56]} pl={[0, 56]} fontSize={24}>
        受賞
      </Heading>
      <Flex justify="center">
        {isXl ? (
          <Image src={GiftImage} width={625} height={500} />
        ) : (
          <Image src={GiftImage} width={375} height={300} />
        )}
      </Flex>
      <Box h={12} />
      <IntroLinkBox text="TOPに戻る" topage="/" />
      <Box h={16} />
      <Footer />
    </Box>
  );
}
