import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import Image from "next/image";
import AdArea from "../components/AdArea";
import Footer from "../components/Footer";
import PersonalImageSlider from "../components/PersonalImageSlider";
import KadaiInfoBox from "../../public/images/kadaiinfobox.png";
import PersonalTopImage from "../components/PersonalTopImage";
import PersonalMovie from "../components/PersonalMovie";
import PersonalInterview from "../components/PersonalInterview";
import PersonalAdArea from "../components/PersonalAdArea";
import MenuBox from "../components/MenuBox";

export default function Personal() {
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Flex position="fixed" right={["2.5", "5"]} bottom="8" zIndex="overlay">
        <Center
          w={["68px", "96px"]}
          h={["68px", "96px"]}
          bgColor="white"
          marginX="auto"
          borderRadius="full"
          borderColor="black"
          border="2px"
        >
          <Text fontWeight="bold" fontSize={["sm", "md"]} marginX="1">
            投票する
          </Text>
        </Center>
      </Flex>
      <Box marginTop="18px" />
      <Heading>
        <Center fontSize={["xl", "4xl"]} color="lightblue">
          KADAI INFO
        </Center>
      </Heading>
      <Box marginTop="18px" />
      <Box w="100%" h="200px" bgColor="gray.200">
        <Center>Top画像</Center>
      </Box>
      <Box marginTop="36px" />
      <Flex flexDir={["column", "row"]} justify="center">
        <Heading>
          <Center>MODEL</Center>
        </Heading>
        <Center marginLeft={["0", "8"]}>
          <Text color="red.600" fontSize="xl">
            Girls
          </Text>
        </Center>
      </Flex>
      <Box marginTop="18px" />
      <PersonalTopImage />

      <Box marginTop="56px" />
      <Box w="100%">
        <Center>
          <AdArea
            width={["300px", "600px"]}
            height={["250px", "500px"]}
            text="広告A"
          />
        </Center>
      </Box>
      <Box marginTop="56px" />
      <Heading fontSize="2xl" marginLeft={["0", "80"]}>
        一 PHOTO
      </Heading>
      <Box marginTop="24px" />
      <Box w="100%" h="100%">
        <PersonalImageSlider />
      </Box>
      <Box marginTop="56px" />
      <Heading fontSize="2xl" marginLeft={["0", "80"]}>
        一 MOVIE
      </Heading>
      <Box marginTop="24px" />
      <Box w="100%">
        <Box marginX="4">
          <PersonalMovie />
        </Box>
      </Box>
      <Box marginTop="56px" />
      <PersonalInterview />

      <Box marginTop="36px" />
      <PersonalAdArea />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
