import { Box, Center, Flex, Text } from "@chakra-ui/layout";
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
import { getPageIds, getPageInfo } from "./api";
import IntroLinkBox from "../components/IntroLinkBox";

// ビルド時に /content.id のページを静的生成してくれる
export async function getStaticPaths() {
  const paths = await getPageIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const personal: any = await getPageInfo(params.id);
  return {
    props: {
      personal,
    },
  };
}

export default function Personal({ personal }: any) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const title: string =
    "No." + (personal.entry_number as string) + " " + personal.name;
  return (
    <Box w="100%" h="100%">
      <MenuBox />
      {/* {!isXl && (
        <Flex position="fixed" right="2.5" bottom="5" zIndex="overlay">
          <Center
            w={14}
            h={14}
            bgColor="white"
            marginX="auto"
            borderRadius="full"
            borderColor="black"
            border="2px"
          >
            <Text fontWeight="bold" fontSize={10} marginX="1">
              投票する
            </Text>
          </Center>
        </Flex>
      )} */}

      <Box marginTop="18px" />
      <Header
        title={title}
        disable={false}
        name={personal.name}
        id={personal.id}
        personalDescription={personal.interview.a_word}
        personalImage={personal.top_image}
      />
      <Box marginTop="36px" />
      <Flex flexDir={["column", "row"]} justify="center">
        <Center>
          <HeadingModel2 />
        </Center>
        <Center marginLeft={["0", "8"]}>
          {personal.gender[0] == "male" ? (
            <Text color="blue.600" fontSize={["xl", "2xl"]} fontWeight="bold">
              Boys
            </Text>
          ) : (
            <Text color="red.600" fontSize={["xl", "2xl"]} fontWeight="bold">
              Girls
            </Text>
          )}
        </Center>
      </Flex>
      <Box marginTop="18px" />
      <PersonalTopImage
        topImage={personal.top_image}
        entryNumber={personal.entry_number}
        name={personal.name}
        faculty={personal.belonging.faculty}
        from={personal.belonging.from}
        club={personal.belonging.club}
        instagram={personal.instagram}
        twitter={personal.twitter}
      />
      <Box marginTop="56px" />
      <HeadingPhoto />
      <Box marginTop="24px" />
      <Box w="100%" h="100%">
        <PersonalImageSlider
          images={[
            personal.images.slider_image1,
            personal.images.slider_image2,
            personal.images.slider_image3,
          ]}
        />
      </Box>
      <Box marginTop="56px" />
      <HeadingMovie />
      <Box marginTop="24px" />
      <Box w="100%">
        <Box marginX="4">
          <PersonalMovie youtubeUrl={personal.youtube} />
        </Box>
      </Box>
      <Box marginTop="56px" />
      <PersonalProfile
        image={personal.second_image}
        tall={personal.profile.tall}
        favoritePlace={personal.profile.favorite_place}
        favoriteYouTube={personal.profile.favorite_youtube}
        favoriteBland={personal.profile.favorite_bland}
        hobby={personal.profile.hobby}
        myboom={personal.profile.myboom}
        holidays={personal.profile.holidays}
        dream={personal.profile.dream}
      />
      <Box marginTop="24px" />
      <PersonalInterview
        image={personal.second_image}
        whyEntry={personal.interview.why_entry}
        working={personal.interview.working}
        want={personal.interview.want}
        beauty={personal.interview.beauty}
        selfIntro={personal.interview.self_intro}
        aWord={personal.interview.a_word}
      />
      <Box h={8} />
      {isXl ? (
        <>
          <Flex
            alignItems="center"
            justify="center"
            flexDir={["column", "row"]}
          >
            <AdArea />
          </Flex>
          <Box h={10} />
          <Flex justify="center">
            <Box
              border="1px"
              borderColor="black"
              borderTop="initial"
              borderX="initial"
              paddingX={4}
            >
              <Text fontSize="xl">撮影 : {personal.cameraman}</Text>
            </Box>
          </Flex>
          <Box h={10} />
          <Box>
            <IntroLinkBox text={"この人に投票する"} topage={""} />
            <Box h={3} />
            <IntroLinkBox text={"他のモデルを見る"} topage={"/model"} />
          </Box>
        </>
      ) : (
        <>
          <Flex justify="center">
            <Box
              border="1px"
              borderColor="black"
              borderTop="initial"
              borderX="initial"
              paddingX={4}
            >
              <Text fontSize="md">撮影 : {personal.cameraman}</Text>
            </Box>
          </Flex>
          <Box h={8} />
          <Box>
            {/* <IntroLinkBox text={"この人に投票する"} topage={""} />
            <Box h={3} /> */}
            <IntroLinkBox text={"他のモデルを見る"} topage={"/model"} />
          </Box>
          <Box h={14} />
          <Flex
            alignItems="center"
            justify="center"
            flexDir={["column", "row"]}
          >
            <AdArea />
          </Flex>
        </>
      )}

      <Box h={16} />
      <Footer />
    </Box>
  );
}
