import { Box, Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import MovieFrame from "./MovieFrame";

type Props = {
  youtubeUrl: string | undefined;
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
        {props.youtubeUrl ? (
          <Box pos="absolute" zIndex="1" top="6" left="5">
            <iframe
              width="300"
              height="167"
              src={props.youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        ) : (
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
        )}
      </Box>
    );
  }
}
