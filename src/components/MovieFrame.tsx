import { Box } from "@chakra-ui/layout";
import Image from "next/image";
import MovieFrameImage from "../../public/svgs/movieframe.svg";

export default function MovieFrame() {
  return (
    <Box>
      <Image src={MovieFrameImage} />
    </Box>
  );
}
