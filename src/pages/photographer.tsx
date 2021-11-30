import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
import IntroLinkBox from "../components/IntroLinkBox";
import Footer from "../components/Footer";
import Cameraman from "../components/Cameraman";
import { getPhotographer } from "./api";

export async function getStaticProps() {
  const photographers = await getPhotographer();

  return {
    props: {
      photographers: photographers,
    },
  };
}

export default function Photographer({ photographers }: any) {
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      <Box marginTop="18" />
      <Header title={"カメラマン紹介"} disable={false} />
      <Box marginTop="18px" />
      <Center>
        <Heading fontSize={30}>Photographer</Heading>
      </Center>
      <Flex
        alignItems="center"
        justify="center"
        flexDir="column"
        marginX="5"
        marginTop="4"
      >
        <Text fontSize={[13, 16]}>
          「美男美女SNAP2021」はカメラマンとして活動している現役鹿児島大学生に撮影を依頼しました！
        </Text>
        <Text fontSize={[13, 16]}>
          カメラマンの皆様、ご協力ありがとうございました！
        </Text>
        <Text fontSize={[13, 16]}>
          是非、彼らのSNSもチェックしてみてください！
        </Text>
      </Flex>
      <Center>
        <SimpleGrid columns={3} spacing={[3, 14]} marginX="6" marginTop="6">
          {photographers.map((photographer: any) => (
            <Cameraman
              key={photographer.id}
              name={photographer.name}
              image={photographer.image.url}
              instagram={photographer.instagram}
              twitter={photographer.twitter}
            />
          ))}
        </SimpleGrid>
      </Center>
      <Box h={12} />
      <IntroLinkBox text="TOPに戻る" topage="/" />
      <Box h={16} />
      <Footer />
    </Box>
  );
}
