import { Box, Flex } from "@chakra-ui/layout";
import HeadingMovieImage from "../../public/svgs/headingmovie.svg";
import HeadingYoutubeImage from "../../public/svgs/headingyoutube.svg";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingMovie() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Flex ml={96} pl={12}>
        <Image src={HeadingMovieImage} width={200} height={50} />
        <Box w={400} />
        <Image src={HeadingYoutubeImage} width={200} height={50} />
      </Flex>
    );
  }
  return (
    <Flex>
      <Image src={HeadingMovieImage} />
      <Box w={100} />
      <Image src={HeadingYoutubeImage} />
    </Flex>
  );
}
