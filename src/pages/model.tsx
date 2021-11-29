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
import { getBoysTopImages, getGirlsTopImages } from "./api";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const girls = await getGirlsTopImages();
  const boys = await getBoysTopImages();
  return {
    props: {
      girls,
      boys,
    },
  };
}

export default function Model({ girls, boys }: any) {
  const [isGirls, setIsGirls] = useState(true);
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
      <HeadingGenderButton isGirls={isGirls} setIsGirls={setIsGirls} />
      <Flex>
        <Spacer />
        <ModelGrid girls={girls} boys={boys} isGirls={isGirls} />
        <Spacer />
      </Flex>
      <Box marginTop="56px" />

      <Heading marginLeft={[6, "72"]} pl={[0, 40]} fontSize={24}>
        投票方法
      </Heading>
      <Flex justify={["initial", "center"]}>
        <HowToVote />
      </Flex>
      <Box marginTop="48px" />
      <Box w="100%">
        <Box marginTop={8} />
        <Flex alignItems="center" justify="center" flexDir={["column", "row"]}>
          <AdArea />
        </Flex>
      </Box>
      <Box h={12} />
      <IntroLinkBox text="TOPに戻る" topage="/" />
      <Box h={16} />
      <Footer />
    </Box>
  );
}
