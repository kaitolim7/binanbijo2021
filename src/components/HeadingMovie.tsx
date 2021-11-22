import { Box } from "@chakra-ui/layout";
import HeadingMovieImage from "../../public/svgs/headingmovie.svg";
import Image from "next/image";

export default function HeadingMovie() {
  return (
    <Box ml={[0, 96]} pl={[0, 12]}>
      <Image src={HeadingMovieImage} />
    </Box>
  );
}
