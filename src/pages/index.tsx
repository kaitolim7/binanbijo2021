import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Divider,
  Heading,
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

const Home: NextPage = () => {
  return (
    <Box w="100%" h="100%">
      <Box marginTop="18px" />
      <Heading>
        <Center fontSize="xl" color="lightblue">
          KADAI INFO
        </Center>
      </Heading>
      <Box marginTop="18px" />
      <Box w="100%" h="300px" bgColor="gray.200">
        <Center>Top画像</Center>
      </Box>
      <Box marginTop="36px" />
      <Center>
        <HeadingBox />
      </Center>
      <Box w="100%" h="250px">
        <Center>
          <Box w="90%">
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
          <AdArea width="300px" height="250px" text="広告A" />
        </Center>
      </Box>
      <Box marginTop="36px" />
      <Center>
        <HeadingBox />
      </Center>
      <Box marginTop="36px" />
      <ImageSlider heading="Girls" hedingColor="red.600" />
      <Box marginTop="30px" />
      <ImageSlider heading="Boys" hedingColor="blue.600" />
      <Box marginTop="36px" />
      <Center>
        <HeadingBox />
      </Center>
      <Box w="100%" h="250px" bgColor="gray.300">
        投票説明画像
      </Box>
      <Box marginTop="36px" />
      <Center>
        <HeadingBox />
      </Center>
      <Box w="100%" h="250px" bgColor="gray.300">
        スケジュール表
      </Box>
      <Box marginTop="12px" />
      <IntroLinkBox text="美男美女SNAPとは" />
      <Box marginTop="36px" />
      <Box w="100%">
        <Center>
          <AdArea width="320px" height="100px" text="広告B①" />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Box w="100%">
        <Center>
          <AdArea width="320px" height="100px" text="広告B②" />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Box w="100%">
        <Center>
          <AdArea width="234px" height="60px" text="広告C①" />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Box w="100%">
        <Center>
          <AdArea width="234px" height="60px" text="広告C②" />
        </Center>
      </Box>
      <Box marginTop="56px" />
      <Box w="100%" h="250px" position="relative" bgColor="gray.300">
        <Box position="absolute" top="-25px">
          <Center>
            <HeadingBox />
          </Center>
        </Box>
        KADAI INFOの紹介画像
      </Box>
      <Box marginTop="12px" />
      <IntroLinkBox text="KADAI INFOとは" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
};

export default Home;
