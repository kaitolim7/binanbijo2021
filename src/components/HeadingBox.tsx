import { Box, Center, Square } from "@chakra-ui/layout";
import HeadingBoxImage from "../../public/images/headingboximage.png";
import Image from "next/image";

export default function HeadingBox() {
  return (
    <Box w="40%" h="50px">
      <Image src={HeadingBoxImage}></Image>
    </Box>
  );
}
