import Image from "next/image";
import GirlButton from "../../public/svgs/headinggirl.svg";
import BoyButton from "../../public/svgs/headingboy.svg";
import { Flex, Spacer } from "@chakra-ui/layout";

export default function HeadingGenderButton() {
  return (
    <Flex w="100%" h="100px">
      <Spacer />
      <Image src={GirlButton} />
      <Spacer />
      <Image src={BoyButton} />
      <Spacer />
    </Flex>
  );
}
