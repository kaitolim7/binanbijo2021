import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import AdArea from "../components/AdArea";
import Footer from "../components/Footer";
import HeadingBox from "../components/HeadingBox";
import ImageItem from "../components/ImageGridItem";
import IntroLinkBox from "../components/IntroLinkBox";
import ModelGrid from "../components/ModelGrid";

export default function Model() {
  return (
    <Box w="100%" h="100%">
      <Box marginTop="18px" />
      <Heading>
        <Center fontSize="xl" color="lightblue">
          KADAI INFO
        </Center>
      </Heading>
      <Box marginTop="18px" />
      <Box w="100%" h="200px" bgColor="gray.200">
        <Center>Top画像</Center>
      </Box>
      <Box marginTop="36px" />
      <Heading>
        <Center>MODEL</Center>
      </Heading>
      <Box marginTop="16px" />
      <Flex w="100%" h="100px">
        <Spacer />
        <HeadingBox />
        <Spacer />
        <HeadingBox />
        <Spacer />
      </Flex>
      <ModelGrid />
      <Box marginTop="56px" />
      <Box w="100%" h="250px" position="relative" bgColor="gray.300">
        <Box position="absolute" top="-25px">
          <Flex marginX="8">
            <HeadingBox />
          </Flex>
        </Box>
        投票説明画像
      </Box>
      <Box marginTop="48px" />
      <Box w="100%">
        <Center>
          <AdArea width="300px" height="250px" text="広告A" />
        </Center>
        <Box marginTop="16px" />
        <Center>
          <AdArea width="320px" height="100px" text="広告B①" />
        </Center>
        <Box marginTop="8px" />
        <Center>
          <AdArea width="320px" height="100px" text="広告B①" />
        </Center>
        <Box marginTop="16px" />
        <Center>
          <AdArea width="234px" height="60px" text="広告C①" />
        </Center>
        <Box marginTop="8px" />
        <Center>
          <AdArea width="234px" height="60px" text="広告C①" />
        </Center>
      </Box>
      <Box marginTop="36px" />
      <IntroLinkBox text="TOPに戻る" />
      <Box marginTop="36px" />
      <Footer />
    </Box>
  );
}
