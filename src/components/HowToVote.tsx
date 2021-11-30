import { Box } from "@chakra-ui/layout";
import HowToVoteImage from "../../public/svgs/howtovote.svg";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HowToVote() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box>
      {isXl ? (
        <Image src={HowToVoteImage} width={625} height={500} />
      ) : (
        <Image src={HowToVoteImage} width={375} height={300} />
      )}
    </Box>
  );
}
