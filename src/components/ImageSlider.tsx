import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import RightArrow from "../../public/svgs/right_arrow.svg";
import Image from "next/image";
import ImageSliderItem, { ImageProps } from "./ImageSliderItem";
import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";
import { useRouter } from "next/dist/client/router";
import { useBreakpointValue } from "@chakra-ui/media-query";

type Props = {
  heading: string;
  hedingColor: string;
  topImages: {
    id: string;
    url: string;
  }[];
};

export default function ImageSlider(props: Props) {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Center>
      <Box w="1000px" position="relative">
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
        <Box w={[375, 1020]}>
          {props.topImages ? (
            <ScrollingCarousel
              leftIcon={<LeftIcon />}
              rightIcon={<RightIcon />}
            >
              {props.topImages.map((topImage: any) => (
                <ImageSliderItem id={topImage.id} image={topImage.url} />
              ))}
            </ScrollingCarousel>
          ) : (
            <ScrollingCarousel
              leftIcon={<LeftIcon />}
              rightIcon={<RightIcon />}
            >
              <ImageSliderItem id={""} image={""} />
              <ImageSliderItem id={""} image={""} />
              <ImageSliderItem id={""} image={""} />
            </ScrollingCarousel>
          )}
        </Box>

        <Flex w={["95%", "1020px"]} justify="flex-end">
          <Text
            fontWeight="bold"
            fontSize={["md", "xl"]}
            mt={[1, 0.5]}
            marginRight="1"
            _hover={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
            onClick={() => router.push("/model")}
          >
            モデル一覧を見る
          </Text>
          <Box mt={[1, 1.5]}>
            <Image src={RightArrow} width={12} height={12} />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
