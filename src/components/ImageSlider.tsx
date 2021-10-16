import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import HeadingBox from "./HeadingBox";
import ImageSliderItem from "./ImageSliderItem";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

type Props = {
  heading: string;
  hedingColor: string;
};

export default function ImageSliderSlider(props: Props) {
  return (
    <Box w="100%">
      {/* // 一時的にScrollIcon非表示 */}
      <Heading color={props.hedingColor}>{props.heading}</Heading>
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
        <Text fontWeight="bold" fontSize={["md", "xl"]} as="u">
          モデル一覧を見る
        </Text>
        <Text fontWeight="bold">→</Text>
      </Flex>
    </Box>
  );
}
