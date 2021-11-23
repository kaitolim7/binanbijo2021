import Image from "next/image";
import GirlButtonOn from "../../public/svgs/headinggirlon.svg";
import GirlButton from "../../public/svgs/headinggirl.svg";
import BoyButtonOn from "../../public/svgs/headingboyon.svg";
import BoyButton from "../../public/svgs/headingboy.svg";
import { Box, Flex } from "@chakra-ui/layout";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isGirls: boolean;
  setIsGirls: Dispatch<SetStateAction<boolean>>;
};

export default function HeadingGenderButton(props: Props) {
  const clickGirls = () => {
    props.setIsGirls(true);
  };
  const clickBoys = () => {
    props.setIsGirls(false);
  };

  return (
    <Flex w="100%" h="100px" justify="center">
      {props.isGirls ? (
        <>
          <Image src={GirlButtonOn} />
          <Box w={[0, 10]} />
          <Image src={BoyButton} onClick={() => clickBoys()} />
        </>
      ) : (
        <>
          <Image src={GirlButton} onClick={() => clickGirls()} />
          <Box w={[0, 10]} />
          <Image src={BoyButtonOn} />
        </>
      )}
    </Flex>
  );
}
