import { Box, Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import MovieFrame from "./MovieFrame";

type Props = {
  youtubeUrl: string;
};

export default function PersonalMovie(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Center>
        <iframe
          width={560}
          height={315}
          src={props.youtubeUrl}
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
        <Box pos="absolute" zIndex="1" top="10%" left="7%">
          <iframe
            width="320"
            height="180"
            src={props.youtubeUrl}
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
