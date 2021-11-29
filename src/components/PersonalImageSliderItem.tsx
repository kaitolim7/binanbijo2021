import Image from "next/image";
import { Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};

type Props = {
  image: ImageProps;
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
        <Image src={props.image.url} width={333} height={500} />
      </Center>
    );
  } else {
    return (
      <Center>
        <Image
          src={props.image.url}
          width={props.image.width}
          height={props.image.height}
        />
      </Center>
    );
  }
}
