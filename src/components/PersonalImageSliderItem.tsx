import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box, Center, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};

type Props = {
  image: ImageProps | undefined;
};

export default function PersonalImageSliderItem(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Center
        _hover={{
          // bgColor: "#250B0D",
          opacity: "0.7",
        }}
      >
        {props.image ? (
          <Image src={props.image.url} width={400} height={600} />
        ) : (
          <Image src={Test} />
        )}
      </Center>
    );
  } else {
    return (
      <Center
        _hover={{
          // bgColor: "#250B0D",
          opacity: "0.7",
        }}
      >
        {props.image ? (
          <Image src={props.image.url} width={375} height={562.5} />
        ) : (
          <Image src={Test} />
        )}
      </Center>
    );
  }
}
