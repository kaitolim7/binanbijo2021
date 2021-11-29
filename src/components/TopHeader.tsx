import { Box, Center, Flex } from "@chakra-ui/layout";
import TopHeaderImage from "../../public/svgs/topheader.svg";
import TopHeaderXlImage from "../../public/svgs/topheaderxl.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import KadaiInfoLogo from "../../public/svgs/kadaiinfo_logo.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";

type Props = {
  topImages: { id: string; url: string }[];
};

export default function TopHeader(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpenA(true), 100);
    setTimeout(() => setOpenB(true), 1200);
  }, []);

  if (isXl) {
    return (
      <Box>
        <Center shadow="md">
          <Image src={KadaiInfoLogo} />
        </Center>
        <Center pos="relative" w="100%" h="580px" mt={3}>
          <Flex h="580px" alignItems="center" justify="center">
            <Box paddingX={3}>
              <Box padding={3} opacity={openA ? 1 : 0} transition="0.4s">
                <Image src={props.topImages[0].url} width={300} height={200} />
              </Box>
              <Box marginTop={14} />
              <Box padding={3} opacity={openA ? 1 : 0} transition="2.8s">
                <Image src={props.topImages[3].url} width={300} height={200} />
              </Box>
            </Box>
            <Box paddingX={3}>
              <Box padding={3} opacity={openA ? 1 : 0} transition="3.6s">
                <Image src={props.topImages[4].url} width={300} height={200} />
              </Box>
              <Box marginTop={14} />
              <Box padding={3} opacity={openA ? 1 : 0} transition="1.2s">
                <Image src={props.topImages[1].url} width={300} height={200} />
              </Box>
            </Box>
            <Box paddingX={3}>
              <Box padding={3} opacity={openA ? 1 : 0} transition="2.0s">
                <Image src={props.topImages[2].url} width={300} height={200} />
              </Box>
              <Box marginTop={14} />
              <Box padding={3} opacity={openA ? 1 : 0} transition="4.6s">
                <Image src={props.topImages[5].url} width={300} height={200} />
              </Box>
            </Box>
          </Flex>
          <Center
            opacity={openB ? 1 : 0}
            transition="2s"
            pos="absolute"
            zIndex="1"
            top="28"
            left="18%"
          >
            <Image src={TopHeaderXlImage} width={1000} height={300} />
          </Center>
        </Center>
      </Box>
    );
  } else {
    return (
      <Box>
        <Center shadow="md">
          <Image src={KadaiInfoLogo} />
        </Center>
        <Center pos="relative" w="100%" h="580px" mt={3}>
          <Flex h="580px" alignItems="center" justify="center">
            <Box marginTop={5}>
              <Box padding={3} opacity={openA ? 1 : 0} transition="0.4s">
                <Image src={props.topImages[0].url} width={176} height={117} />
              </Box>

              <Box padding={3} opacity={openA ? 1 : 0} transition="3.2s">
                <Image src={props.topImages[3].url} width={176} height={117} />
              </Box>
              <Box padding={3} opacity={openA ? 1 : 0} transition="2.0s">
                <Image src={props.topImages[1].url} width={176} height={117} />
              </Box>
            </Box>
            <Box mx={-1.5} />
            <Box marginTop={-32}>
              <Box padding={3} opacity={openA ? 1 : 0} transition="2.8s">
                <Image src={props.topImages[4].url} width={176} height={117} />
              </Box>
              <Box padding={3} opacity={openA ? 1 : 0} transition="1.2s">
                <Image src={props.topImages[2].url} width={176} height={117} />
              </Box>
              <Box padding={3} opacity={openA ? 1 : 0} transition="4.0s">
                <Image src={props.topImages[5].url} width={176} height={117} />
              </Box>
            </Box>
          </Flex>
          <Center
            opacity={openB ? 1 : 0}
            transition="2s"
            pos="absolute"
            zIndex="1"
            top="6"
          >
            <Image src={TopHeaderImage} />
          </Center>
        </Center>
      </Box>
    );
  }
}
