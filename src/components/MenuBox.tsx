import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import { useState } from "react";
import KadaiInfoMenuBox from "../../public/svgs/menu_box.svg";
import KadaiInfoLogo from "../../public/svgs/kadaiinfo_logo.svg";
import Menu from "./InfoMenu";
import { CloseIcon } from "@chakra-ui/icons";
import { Slide } from "@chakra-ui/transition";

export default function MenuBox() {
  const [open, setOpen] = useState(false);
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  const handleOpen = () => {
    setOpen(!open);
  };

  if (isXl) {
    return open ? (
      <Flex
        position="fixed"
        zIndex="overlay"
        w="100%"
        h="320px"
        marginTop="-5"
        flexDir="column"
      >
        <Slide direction="top" in={open}>
          <Flex paddingTop="5" bgColor="white">
            <Spacer />
            <Image src={KadaiInfoLogo} />
            <Spacer>
              <CloseIcon
                marginTop="2"
                marginLeft="16"
                w="24px"
                h="24px"
                onClick={() => handleOpen()}
              />
            </Spacer>
          </Flex>
          <Menu onClose={handleOpen} />
        </Slide>
      </Flex>
    ) : (
      <Flex position="fixed" right="5" zIndex="overlay">
        <Image
          src={KadaiInfoMenuBox}
          // width={90}
          // height={150}
          objectPosition="right"
          onClick={() => handleOpen()}
        />
      </Flex>
    );
  } else {
    return open ? (
      <Flex
        position="fixed"
        zIndex="overlay"
        w="100%"
        h="320px"
        marginTop="-5"
        flexDir="column"
      >
        <Slide direction="top" in={open}>
          <Flex paddingTop="5" bgColor="white">
            <Spacer />
            <Image src={KadaiInfoLogo} />
            <Spacer>
              <CloseIcon
                marginTop="2"
                marginLeft="16"
                onClick={() => handleOpen()}
              />
            </Spacer>
          </Flex>
          <Menu onClose={handleOpen} />
        </Slide>
      </Flex>
    ) : (
      <Flex position="fixed" right="2.5" zIndex="overlay">
        <Image
          src={KadaiInfoMenuBox}
          width={50}
          height={70}
          objectPosition="right"
          onClick={() => handleOpen()}
        />
      </Flex>
    );
  }
}
