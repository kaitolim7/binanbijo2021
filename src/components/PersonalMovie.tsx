import { Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

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
      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/7AYP2SvN_VA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}
