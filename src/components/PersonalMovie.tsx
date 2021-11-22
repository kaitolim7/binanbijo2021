import { Box, Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import MovieFrame from "./MovieFrame";

export default function PersonalMovie() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Center>
        <iframe
          width={540}
          height={400}
          src="https://www.youtube.com/embed/7AYP2SvN_VA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Center>
    );
  } else {
    return (
      <Box pos="relative">
        <MovieFrame></MovieFrame>
        <Box pos="absolute" zIndex="1" top="2.5" left="8">
          <iframe
            width="94%"
            height="195"
            src="https://www.youtube.com/embed/7AYP2SvN_VA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    );
  }
}
