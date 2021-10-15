import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import AdArea from "../components/AdArea";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";
import PersonalImageSlider from "../components/PersonalImageSlider";

export default function Personal() {
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
      <Center>
        <Text color="red.600" fontSize="xl">
          Girls
        </Text>
      </Center>
      <Box marginTop="18px" />
      <Flex>
        <Text
          borderColor="black"
          border="2px"
          borderStart="inherit"
          fontSize="2xl"
          fontWeight="bold"
          padding="2"
        >
          No.1 さきっちょ
        </Text>
      </Flex>
      <Box w="100%" h="100%">
        <Image src={Test} layout="responsive" />
      </Box>
      <Flex justify="flex-end">
        <Text
          borderColor="black"
          border="2px"
          borderEnd="inherit"
          fontSize="sm"
          fontWeight="bold"
          padding="2"
        >
          ● 教育学部 3年 ● 出身 / 鹿児島 ● サークル / -
        </Text>
      </Flex>
      <Box marginTop="56px" />
      <Box w="100%">
        <Center>
          <AdArea width="300px" height="250px" text="広告A" />
        </Center>
      </Box>
      <Box marginTop="56px" />
      <Heading fontSize="2xl">一 PHOTO</Heading>
      <Box marginTop="24px" />
      <Box w="100%">
        <PersonalImageSlider />
      </Box>
      <Box marginTop="56px" />
      <Heading fontSize="2xl">一 MOVIE</Heading>
      <Box marginTop="24px" />
      <Box w="100%">
        <Box marginX="4">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/7AYP2SvN_VA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
      <Box marginTop="56px" />
      <Heading fontSize="2xl">一 INTERVIEW①</Heading>
      <Box marginTop="24px" />
      <Box marginLeft="8">
        <Text fontSize="xs" paddingBottom="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
      </Box>
      <Box marginTop="24px" />
      <Box w="100%" h="100%">
        <Image src={Test} layout="responsive" />
      </Box>
      <Box marginTop="56px" />
      <Heading fontSize="2xl">一 INTERVIEW②</Heading>
      <Box marginTop="24px" />
      <Box marginLeft="8">
        <Text fontSize="xs" paddingBottom="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
        <Text fontSize="xs" paddingY="2">
          ◯ 休日の過ごし方 / ひとりごそごそ
        </Text>
      </Box>
      <Box marginTop="36px" />
      <Center
        marginX="32"
        borderColor="black"
        borderWidth="thin"
        borderTop="hidden"
        borderX="hidden"
      >
        <Text fontSize="xl">撮影 : ahn</Text>
      </Center>
      <Box marginTop="36px" />
      <IntroLinkBox text="この人に投票する" />
      <Box marginTop="16px" />
      <IntroLinkBox text="他のモデルを見る" />
      <Box marginTop="36px" />
      <Box w="100%">
        <Center>
          <AdArea width="320px" height="100px" text="広告B①" />
        </Center>
      </Box>
      <Box marginTop="12px" />
      <Box w="100%">
        <Center>
          <AdArea width="320px" height="100px" text="広告B①" />
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
          <AdArea width="234px" height="60px" text="広告C①" />
        </Center>
      </Box>
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
