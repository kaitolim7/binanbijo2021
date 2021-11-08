import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
import Image from "next/image";
import Test from "../../public/images/parker.jpeg";
import theme from "../../styles/theme";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";
import Cameraman from "../components/Cameraman";

export default function Photographer() {
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <Header />
      <Box marginTop="18px" />
      <Center>
        <Heading fontSize={30}>Photographer</Heading>
      </Center>
      <Flex flexDir="column" marginX="5" marginTop="4">
        <Text fontSize={13}>
          「美男美女SNAP2021」はカメラマンとして活動している現役鹿児島大学生に撮影を依頼しました！
        </Text>
        <Text fontSize={13}>
          カメラマンの皆様、ご協力ありがとうございました！
        </Text>
        <Text fontSize={13}>是非、彼らのSNSもチェックしてみてください！</Text>
      </Flex>
      <SimpleGrid columns={3} spacing={3} marginX="6" marginTop="6">
        <Cameraman />
        <Cameraman />
        <Cameraman />
        <Cameraman />
        <Cameraman />
        <Cameraman />
      </SimpleGrid>
      <Box marginTop="12" />
      <IntroLinkBox text="TOPに戻る" />
      <Box marginTop="56px" />
      <Footer />
    </Box>
  );
}
