import { Box, Center } from "@chakra-ui/layout";
import Image from "next/image";
import MovieFrameImage from "../../public/svgs/movieframe.svg";

export default function MovieFrame() {
  return (
    <Center>
      <Image src={MovieFrameImage} />
    </Center>
  );
}
