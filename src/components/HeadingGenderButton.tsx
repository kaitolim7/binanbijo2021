import Image from "next/image";
import GirlButton from "../../public/svgs/headinggirl.svg";
import BoyButton from "../../public/svgs/headingboy.svg";
import { Box, Flex } from "@chakra-ui/layout";

export default function HeadingGenderButton() {
  return (
    <Flex w="100%" h="100px" justify="center">
      <Image src={GirlButton} />
      <Box w={[0, 10]} />
      <Image src={BoyButton} />
    </Flex>
  );
}
