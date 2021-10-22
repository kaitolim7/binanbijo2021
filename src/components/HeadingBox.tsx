import { Box, Center, Heading, Square } from "@chakra-ui/layout";
import HeadingBoxImage from "../../public/svgs/headingbox.svg";
import Image from "next/image";

type Props = {
  title: string;
};

export default function HeadingBox(props: Props) {
  return (
    <Box position="relative">
      <Image src={HeadingBoxImage} />
      <Heading
        position="absolute"
        fontSize={24}
        top="3.5"
        bottom="0"
        margin="auto"
      >
        {props.title}
      </Heading>
    </Box>
  );
}
