import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Image from "next/image";
import AdArea from "../components/AdArea";
import ImageSlider from "../components/ImageSlider";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";

import { useBreakpointValue } from "@chakra-ui/media-query";
import MenuBox from "../components/MenuBox";
import HeadingModel from "../components/HeadingModel";
import NewsBox from "../components/NewsBox";
import IntroImage from "../../public/svgs/introduction.svg";
import IntroXlImage from "../../public/svgs/introductionxl.svg";
import HowToVote from "../components/HowToVote";
import Schedule from "../components/Schedule";
import TopHeader from "../components/TopHeader";
import { getBoysTopImages, getGirlsTopImages, getNews } from "./api";
import { useEffect, useState } from "react";
import shuffle from "../hooks/shuffle";

export async function getStaticProps() {
  const girls = await getGirlsTopImages();
  const boys = await getBoysTopImages();
  const news = await getNews();
  const girlsTopImages = girls.map((girl: any) => ({
    id: girl.id,
    url: girl.topImage.url,
  }));
  const boysTopImages = boys.map((boy: any) => ({
    id: boy.id,
    url: boy.topImage.url,
  }));
  return {
    props: {
      girlsTopImages,
      boysTopImages,
      news,
    },
  };
}

const Home: NextPage = ({ girlsTopImages, boysTopImages, news }: any) => {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const [girls, setGirls] =
    useState<{ id: string; url: string }[]>(girlsTopImages);
  const [boys, setBoys] = useState(boysTopImages);

  useEffect(() => {
    setGirls(shuffle(girlsTopImages));
    setBoys(shuffle(boysTopImages));
  }, []);

  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <TopHeader topImages={girls.slice(0, 3).concat(boys.slice(0, 3))} />
      <Box marginTop="18px" />
      <Box marginTop={["36px", "36px"]} />
      <Flex flexDir={["column", "row"]}>
        <NewsBox news={news} />
        <Box marginTop="36px" />
        {/* <Box w="100%">
          <Center>
            <AdArea
              width={["300px", "600px"]}
              height={["250px", "500px"]}
              text="広告A"
            />
          </Center>
        </Box> */}
      </Flex>
      <Box marginTop={["36px", "36px"]} />
      <Flex justify={["flex-end", "initial"]}>
        <HeadingModel />
      </Flex>
      <Box marginTop={3} />
      <ImageSlider heading="GIRLS" hedingColor="red.600" topImages={girls} />
      <Box marginTop="30px" />
      <ImageSlider heading="BOYS" hedingColor="blue.600" topImages={boys} />
      <Box marginTop="36px" />
      {isXl ? (
        <Image src={IntroXlImage} height={360} />
      ) : (
        <Image src={IntroImage} />
      )}
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
      <Box marginTop="12px" />
      <IntroLinkBox text="美男美女SNAPについて" topage="/intro" />
      <Box marginTop="36px" />
      <Box marginTop="12px" />
      <Flex alignItems="center" justify="center" flexDir={["column", "row"]}>
        <AdArea
          width={["234px", "540px"]}
          height={["60px", "180px"]}
          text="広告C①"
        />
      </Flex>
      <Box marginTop="56px" />
      <Heading marginLeft={[6, 96]} pl={[0, 56]} fontSize={24}>
        運営
      </Heading>
      <Flex justify={["initial", "center"]}>
        <Text w={["100%", "350px"]} h="250px" bgColor="gray.300">
          KADAI INFOの紹介画像
        </Text>
      </Flex>
      <Box marginTop="12px" />
      <IntroLinkBox
        text="KADAI INFOとは"
        topage="https://kadai-info.com/lp/about-us/"
      />
      <Box h={16} />
      <Footer />
    </Box>
  );
};

export default Home;
