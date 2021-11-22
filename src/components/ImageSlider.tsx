import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import RightArrow from "../../public/svgs/right_arrow.svg";
import Image from "next/image";
import ImageSliderItem from "./ImageSliderItem";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";
import { useRouter } from "next/dist/client/router";
import { useBreakpointValue } from "@chakra-ui/media-query";

type Props = {
  heading: string;
  hedingColor: string;
};

export default function ImageSlider(props: Props) {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Center>
      <Box w="1000px" position="relative">
        {/* // 一時的にScrollIcon非表示 */}
        <Box
          w="60px"
          borderColor="black"
          border="1px"
          marginLeft="3"
          paddingX={[0, 20]}
        >
          <Center
            color={props.hedingColor}
            fontWeight="bold"
            fontSize={["xs", "3xl"]}
            paddingX={["1.5", "0"]}
            paddingTop="0.5"
          >
            {props.heading}
          </Center>
        </Box>

        <ScrollingCarousel leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
        </ScrollingCarousel>
        <Flex w="95%">
          <Spacer />
          <Text
            fontWeight="bold"
            fontSize={["md", "xl"]}
            marginRight="1"
            _hover={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
            onClick={() => router.push("/model")}
          >
            モデル一覧を見る
          </Text>
          <Image src={RightArrow} width={12} height={12} />
        </Flex>
      </Box>
    </Center>
  );
}
