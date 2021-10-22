import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import AdArea from "../components/AdArea";
import Footer from "../components/Footer";
import HeadingBox from "../components/HeadingBox";
import IntroLinkBox from "../components/IntroLinkBox";
import ModelGrid from "../components/ModelGrid";
import MenuBox from "../components/MenuBox";
import HeadingModel2 from "../components/HeadingModel2";
import Header from "../components/Header";
import HeadingGenderButton from "../components/HeadingGenderButton";
import HeadingVote from "../components/HeadingVote";

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
      <Box w="100%" position="relative">
        <Box position="absolute" top="-25px">
          <Flex justify={["center", "initial"]}>
            <HeadingVote />
          </Flex>
        </Box>
        <Flex justify={["initial", "center"]}>
          <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
            投票説明画像
          </Text>
        </Flex>
      </Box>
      <Box marginTop="48px" />
      <Box w="100%">
        <Center>
          <AdArea
            width={["300px", "600px"]}
            height={["250px", "500px"]}
            text="広告A"
          />
        </Center>
        <Box marginTop="16px" />
        <Flex justify="center" flexDir={["column", "row"]}>
          <Spacer />
          <Spacer />
          <Center>
            <AdArea
              width={["320px", "640px"]}
              height={["100px", "200px"]}
              text="広告B①"
            />
          </Center>
          <Spacer />
          <Box marginTop="18px" />
          <Center>
            <AdArea
              width={["320px", "640px"]}
              height={["100px", "200px"]}
              text="広告B①"
            />
          </Center>
          <Spacer />
          <Spacer />
        </Flex>
        <Box marginTop="16px" />
        <Flex flexDir={["column", "row"]}>
          <Spacer />
          <Spacer />
          <Spacer />
          <Center>
            <AdArea
              width={["234px", "540px"]}
              height={["60px", "180px"]}
              text="広告C①"
            />
          </Center>
          <Spacer />
          <Box marginTop="18px" />
          <Center>
            <AdArea
              width={["234px", "540px"]}
              height={["60px", "180px"]}
              text="広告C①"
            />
          </Center>
          <Spacer />
          <Spacer />
          <Spacer />
        </Flex>
      </Box>
      <Box marginTop="36px" />
      <IntroLinkBox text="TOPに戻る" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
