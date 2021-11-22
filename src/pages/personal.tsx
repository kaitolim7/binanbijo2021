import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import AdArea from "../components/AdArea";
import Footer from "../components/Footer";
import PersonalImageSlider from "../components/PersonalImageSlider";
import PersonalTopImage from "../components/PersonalTopImage";
import PersonalMovie from "../components/PersonalMovie";
import PersonalInterview from "../components/PersonalInterview";
import MenuBox from "../components/MenuBox";
import HeadingModel2 from "../components/HeadingModel2";
import Header from "../components/Header";
import HeadingPhoto from "../components/HeadingPhoto";
import HeadingMovie from "../components/HeadingMovie";
import PersonalProfile from "../components/PersonalProfile";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Personal() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      {!isXl && (
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
      )}

      <Box marginTop="18px" />
      <Header />
      <Box marginTop="36px" />
      <Flex flexDir={["column", "row"]} justify="center">
        <Center>
          <HeadingModel2 />
        </Center>
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
      <HeadingPhoto />
      <Box marginTop="24px" />
      <Box w="100%" h="100%">
        <PersonalImageSlider />
      </Box>
      <Box marginTop="56px" />
      <HeadingMovie />
      <Box marginTop="24px" />
      <Box w="100%">
        <Box marginX="4">
          <PersonalMovie />
        </Box>
      </Box>
      <Box marginTop="56px" />
      <PersonalProfile />
      <Box marginTop="24px" />
      <PersonalInterview />
      <Box marginTop="36px" />
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
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
