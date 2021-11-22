import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import AdArea from "../components/AdArea";
import Footer from "../components/Footer";
import IntroLinkBox from "../components/IntroLinkBox";
import ModelGrid from "../components/ModelGrid";
import MenuBox from "../components/MenuBox";
import HeadingModel2 from "../components/HeadingModel2";
import Header from "../components/Header";
import HeadingGenderButton from "../components/HeadingGenderButton";
import HowToVote from "../components/HowToVote";

export default function Model() {
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18px" />
      <Header />
      <Box marginTop="36px" />
      <Center>
        <HeadingModel2 />
      </Center>
      <Box marginTop="16px" />
      <HeadingGenderButton />
      <Flex>
        <Spacer />
        <ModelGrid />
        <Spacer />
      </Flex>
      <Box marginTop="56px" />

      <Heading marginLeft={[6, 96]} pl={[0, 40]} fontSize={24}>
        投票方法
      </Heading>
      <Flex justify={["initial", "center"]}>
        <HowToVote />
      </Flex>
      <Box marginTop="48px" />
      <Box w="100%">
        <Center>
          <AdArea
            width={["300px", "600px"]}
            height={["250px", "500px"]}
            text="広告A"
          />
        </Center>
        <Box marginTop={6} />
        <Flex alignItems="center" justify="center" flexDir={["column", "row"]}>
          <AdArea
            width={["320px", "640px"]}
            height={["100px", "200px"]}
            text="広告B①"
          />
          <Box w={5} h={3} />
          <AdArea
            width={["320px", "640px"]}
            height={["100px", "200px"]}
            text="広告B①"
          />
        </Flex>
        <Box marginTop="16px" />
        <Flex alignItems="center" justify="center" flexDir={["column", "row"]}>
          <AdArea
            width={["234px", "540px"]}
            height={["60px", "180px"]}
            text="広告C①"
          />
          <Box w={5} h={3} />
          <AdArea
            width={["234px", "540px"]}
            height={["60px", "180px"]}
            text="広告C①"
          />
        </Flex>
      </Box>
      <Box marginTop="36px" />
      <IntroLinkBox text="TOPに戻る" topage="/" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
