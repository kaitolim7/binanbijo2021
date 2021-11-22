import { Box } from "@chakra-ui/layout";
import HowToVoteImage from "../../public/svgs/howtovote.svg";
import Image from "next/image";

export default function HowToVote() {
  return (
    <Box>
      <Image src={HowToVoteImage} />
    </Box>
  );
}
