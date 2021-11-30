import Image from "next/image";
import GirlButtonOn from "../../public/svgs/headinggirlon.svg";
import GirlButton from "../../public/svgs/headinggirl.svg";
import BoyButtonOn from "../../public/svgs/headingboyon.svg";
import BoyButton from "../../public/svgs/headingboy.svg";
import MobileGirlButtonOn from "../../public/images/girlson.png";
import MobileGirlButton from "../../public/images/girlsoff.png";
import MobileBoyButtonOn from "../../public/images/boyson.png";
import MobileBoyButton from "../../public/images/boysoff.png";
import { Box, Flex } from "@chakra-ui/layout";
import { Dispatch, SetStateAction } from "react";
import { useBreakpointValue } from "@chakra-ui/media-query";

type Props = {
  isGirls: boolean;
  setIsGirls: Dispatch<SetStateAction<boolean>>;
};

export default function HeadingGenderButton(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const clickGirls = () => {
    props.setIsGirls(true);
  };
  const clickBoys = () => {
    props.setIsGirls(false);
  };

  if (isXl) {
    return (
      <Flex w="100%" h="100px" justify="center">
        {props.isGirls ? (
          <>
            <Image src={GirlButtonOn} onClick={() => clickBoys()} />
            <Box w={[0, 10]} />
            <Image src={BoyButton} onClick={() => clickBoys()} />
          </>
        ) : (
          <>
            <Image src={GirlButton} onClick={() => clickGirls()} />
            <Box w={[0, 10]} />
            <Image src={BoyButtonOn} onClick={() => clickGirls()} />
          </>
        )}
      </Flex>
    );
  } else {
    return (
      <Flex w="100%" justify="center">
        {props.isGirls ? (
          <>
            <Image src={MobileGirlButtonOn} onClick={() => clickBoys()} />
            <Box w={[0, 10]} mr={-8} />
            <Image src={MobileBoyButton} onClick={() => clickBoys()} />
          </>
        ) : (
          <>
            <Image src={MobileGirlButton} onClick={() => clickGirls()} />
            <Box w={[0, 10]} ml={-8} />
            <Image src={MobileBoyButtonOn} onClick={() => clickGirls()} />
          </>
        )}
      </Flex>
    );
  }
}
