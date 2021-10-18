import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeadingBox from "../components/HeadingBox";
import styles from "../styles/Home.module.css";
import NewsLine from "../components/NewsLine";
import AdArea from "../components/AdArea";
import ImageSlider from "../components/ImageSlider";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";

import { useBreakpointValue } from "@chakra-ui/media-query";
import MenuBox from "../components/MenuBox";

const Home: NextPage = () => {
  const hiddenAddAreaB = useBreakpointValue({ sm: false, xl: true });

  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <Heading>
        <Center fontSize={["xl", "4xl"]} color="lightblue">
          KADAI INFO
        </Center>
      </Heading>
      <Box marginTop="18px" />
      <Box w="100%" h={["300px", "500px"]} bgColor="gray.200">
        <Center>Top画像</Center>
      </Box>
      <Box marginTop={["36px", "36px"]} />
      <Flex flexDir={["column", "row"]}>
        <Flex justify={["center", "flex-start"]} marginTop={["0", "56"]}>
          <HeadingBox />
        </Flex>
        <Box w={["100%", "80%"]} h={["250px"]} marginTop={["0", "56"]}>
          <Center>
            <Box w={["90%", "70%"]}>
              <Text fontWeight="bold" fontSize="sm">
                New!!
              </Text>
              <NewsLine />
              <NewsLine />
              <NewsLine />
              <Box marginTop="8px" />
              <Text fontWeight="bold" fontSize="sm">
                もっと見る
              </Text>
            </Box>
          </Center>
        </Box>
        <Box w="100%">
          <Center>
            <AdArea
              width={["300px", "600px"]}
              height={["250px", "500px"]}
              text="広告A"
            />
          </Center>
        </Box>
      </Flex>
      <Box marginTop={["36px", "36px"]} />
      <Flex justify={["center", "initial"]}>
        <HeadingBox />
      </Flex>
      <Box marginTop="36px" />
      <ImageSlider heading="Girls" hedingColor="red.600" />
      <Box marginTop="30px" />
      <ImageSlider heading="Boys" hedingColor="blue.600" />
      <Box marginTop="36px" />
      <Flex justify={["center", "initial"]}>
        <HeadingBox />
      </Flex>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          投票説明画像
        </Text>
      </Flex>
      <Flex marginTop="36px" hidden={!hiddenAddAreaB}>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <AdArea
          width={["320px", "640px"]}
          height={["100px", "200px"]}
          text="広告B①"
        />
        <Spacer />
        <AdArea
          width={["320px", "640px"]}
          height={["100px", "200px"]}
          text="広告B②"
        />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
      <Box marginTop="36px" />
      <Flex justify={["center", "initial"]}>
        <HeadingBox />
      </Flex>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          スケジュール表
        </Text>
      </Flex>
      <Box marginTop="12px" />

      <IntroLinkBox text="美男美女SNAPとは" />

      <Box marginTop="36px" />
      <Box w="100%" hidden={hiddenAddAreaB}>
        <Center>
          <AdArea
            width={["320px", "640px"]}
            height={["100px", "200px"]}
            text="広告B①"
          />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Box w="100%" hidden={hiddenAddAreaB}>
        <Center>
          <AdArea
            width={["320px", "640px"]}
            height={["100px", "200px"]}
            text="広告B②"
          />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Flex flexDir={["column", "row"]}>
        <Spacer />
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

        <Box marginTop="12px" />
        <Center>
          <AdArea
            width={["234px", "540px"]}
            height={["60px", "180px"]}
            text="広告C②"
          />
        </Center>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
      <Box marginTop="56px" />
      <Box w="100%" position="relative">
        <Box position="absolute" top="-25px">
          <Flex justify={["center", "initial"]}>
            <HeadingBox />
          </Flex>
        </Box>
        <Flex justify={["initial", "center"]}>
          <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
            KADAI INFOの紹介画像
          </Text>
        </Flex>
      </Box>
      <Box marginTop="12px" />
      <IntroLinkBox text="KADAI INFOとは" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
};

export default Home;
