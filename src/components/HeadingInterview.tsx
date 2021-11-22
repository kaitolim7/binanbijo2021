import { Box } from "@chakra-ui/layout";
import HeadingInterviewImage from "../../public/svgs/headinginterview.svg";
import Image from "next/image";

export default function HeadingInterview() {
  return (
    <Box ml={[0, 96]} pl={[0, 12]}>
      <Image src={HeadingInterviewImage} />
    </Box>
  );
}
