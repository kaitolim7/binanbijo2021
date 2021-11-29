import Image from "next/image";
import { Box, Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useRouter } from "next/dist/client/router";

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};

type Props = {
  id: string;
  image: string;
};

export default function ImageSliderItem(props: Props) {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Center mx={3} p={3}>
        <Box className="sample1">
          <Image src={props.image} width={300} height={200} />
          <Box className="mask" onClick={() => router.push("/" + props.id)}>
            <Box className="caption">view more</Box>
          </Box>
        </Box>
      </Center>
    );
  } else {
    return (
      <Center mt={1.5} mx={1.5}>
        <Box className="sample2">
          <Image src={props.image} width={225} height={150} />
          <Box className="mask" onClick={() => router.push("/" + props.id)}>
            <Box className="caption">view more</Box>
          </Box>
        </Box>
      </Center>
    );
  }
}
