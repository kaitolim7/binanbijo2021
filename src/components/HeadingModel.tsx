import { Box, Center, Heading, Square } from "@chakra-ui/layout";
import HeadingModelImage from "../../public/svgs/headingmodel.svg";
import Image from "next/image";

export default function HeadingModel() {
  return (
    <Box ml={[0, 80]}>
      <Image src={HeadingModelImage} />
    </Box>
  );
}
