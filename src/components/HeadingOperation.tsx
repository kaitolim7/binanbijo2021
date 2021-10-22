import { Box, Center, Heading, Square } from "@chakra-ui/layout";
import HeadingOperationImage from "../../public/svgs/headingoperation.svg";
import Image from "next/image";

export default function HeadingOperation() {
  return (
    <Box>
      <Image src={HeadingOperationImage} />
    </Box>
  );
}
