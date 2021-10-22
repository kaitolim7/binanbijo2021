import { Box, Center, Heading, Square } from "@chakra-ui/layout";
import HeadingVoteImage from "../../public/svgs/headingvote.svg";
import Image from "next/image";

export default function HeadingVote() {
  return (
    <Box position="relative">
      <Image src={HeadingVoteImage} />
    </Box>
  );
}
