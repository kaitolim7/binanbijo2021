import { Box, Flex } from "@chakra-ui/layout";
import HeadingMovieImage from "../../public/svgs/headingmovie.svg";
import HeadingYoutubeImage from "../../public/svgs/headingyoutube.svg";
import MobileMovieImage from "../../public/images/MOVIE.png";
import MobileYoutubeImage from "../../public/images/YOUTUBE.png";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingMovie() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Flex ml={72} pl={12}>
        <Image src={HeadingMovieImage} width={200} height={50} />
        <Box w={400} />
        <Image src={HeadingYoutubeImage} width={200} height={50} />
      </Flex>
    );
  }
  return (
    <Flex mb={-3}>
      <Box w={134}>
        <Image src={MobileMovieImage} />
      </Box>
      <Box w={40} />
      <Box w={130}>
        <Image src={MobileYoutubeImage} />
      </Box>
    </Flex>
  );
}
