import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import HeadingBox from "./HeadingBox";
import ImageItem from "./ImageItem";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

type Props = {
  heading: string;
  hedingColor: string;
};

export default function ImageSlider(props: Props) {
  return (
    <Box w="100%">
      {/* // 一時的にScrollIcon非表示 */}
      <Heading color={props.hedingColor}>{props.heading}</Heading>
      <ScrollingCarousel leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
      </ScrollingCarousel>
      <Flex w="95%">
        <Spacer />
        <Text fontWeight="bold" fontSize="md" as="u">
          モデル一覧を見る
        </Text>
        <Text fontWeight="bold">→</Text>
      </Flex>
    </Box>
  );
}
