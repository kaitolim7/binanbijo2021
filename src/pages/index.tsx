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

const Home: NextPage = () => {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <TopHeader />
      <Box marginTop="18px" />
      <Box marginTop={["36px", "36px"]} />
      <Flex flexDir={["column", "row"]}>
        <NewsBox />
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
      <ImageSlider heading="GIRLS" hedingColor="red.600" />
      <Box marginTop="30px" />
      <ImageSlider heading="BOYS" hedingColor="blue.600" />
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
      <Flex justify="center" marginTop="36px" hidden={!isXl}>
        <AdArea
          width={["320px", "640px"]}
          height={["100px", "200px"]}
          text="広告B①"
        />
        <Box w={10} />
        <AdArea
          width={["320px", "640px"]}
          height={["100px", "200px"]}
          text="広告B②"
        />
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
      <Box w="100%" hidden={isXl}>
        <Center>
          <AdArea
            width={["320px", "640px"]}
            height={["100px", "200px"]}
            text="広告B①"
          />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Box w="100%" hidden={isXl}>
        <Center>
          <AdArea
            width={["320px", "640px"]}
            height={["100px", "200px"]}
            text="広告B②"
          />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Flex alignItems="center" justify="center" flexDir={["column", "row"]}>
        <AdArea
          width={["234px", "540px"]}
          height={["60px", "180px"]}
          text="広告C①"
        />
        <Box w={10} h={3} />
        <AdArea
          width={["234px", "540px"]}
          height={["60px", "180px"]}
          text="広告C②"
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
      <IntroLinkBox text="KADAI INFOとは" topage="/intro" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
};

export default Home;
