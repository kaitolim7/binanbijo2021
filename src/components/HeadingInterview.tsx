import { Box } from "@chakra-ui/layout";
import HeadingInterviewImage from "../../public/svgs/headinginterview.svg";
import MobileInterviewImage from "../../public/images/INTERVIEW.png";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingInterview() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box ml={72} pl={12}>
        <Image src={HeadingInterviewImage} width={250} height={50} />
      </Box>
    );
  }
  return (
    <Box w={160}>
      <Image src={MobileInterviewImage} />
    </Box>
  );
}
