import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import TwitterLogo from "../../public/svgs/twitter.svg";
import YouTubeLogo from "../../public/svgs/youtube.svg";
import InstagramLogo from "../../public/svgs/instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import OurSns from "../../public/svgs/oursns.svg";
import KadaiInfoBox from "../../public/svgs/kadaiinfo_box.svg";

export default function Footer() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box>
        <Box w="100%" h="100px" bgColor="accent" position="relative">
          <Box position="absolute" top="-20" left="56">
            <Image src={KadaiInfoBox} width={100} height={161} />
          </Box>
          <Flex justify="center" paddingTop="8">
            <Text
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              Top
            </Text>
            <Text
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              企画概要
            </Text>
            <Text
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              過去の美男美女SNAP
            </Text>

            <Text
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              モデル一覧
            </Text>
            <Text
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              お問い合わせ
            </Text>
          </Flex>
        </Box>
        <Box w="100%" h="60px" bgColor="accent">
          <Flex justifyContent="center" alignItems="center">
            <Box paddingBottom="2" paddingRight="2.5">
              <Image src={OurSns} />
            </Box>
            <Box paddingX="3">
              <Image src={InstagramLogo} width={44} height={44} />
            </Box>
            <Box paddingRight="3">
              <Image src={TwitterLogo} width={58} height={58} />
            </Box>
            <Box paddingRight="3">
              <Image src={YouTubeLogo} width={44} height={38} />
            </Box>
            <Text fontSize="sm" paddingTop="3.5" paddingX="8">
              運営 : KADAI INFO
            </Text>
            <Text fontSize="sm" paddingTop="3.5" paddingRight="8">
              協賛 : 〇〇, 〇〇
            </Text>
            <Text fontSize="sm" paddingTop="3.5">
              ©KADAI INFO all right reserved.
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box w="100%" h="60px" bgColor="accent" position="relative">
          <Box position="absolute" top="-16" left="4">
            <Image src={KadaiInfoBox} width={80} height={131} />
          </Box>
          <Flex justifyContent="flex-end" alignItems="center" paddingTop="2">
            <Box paddingBottom="2" paddingRight="2.5">
              <Image src={OurSns} />
            </Box>
            <Box paddingRight="1">
              <Image src={InstagramLogo} width={36} height={36} />
            </Box>
            <Box paddingRight="1">
              <Image src={TwitterLogo} width={48} height={48} />
            </Box>
            <Box paddingRight="4">
              <Image src={YouTubeLogo} width={40} height={36} />
            </Box>
          </Flex>
        </Box>
        <Box w="100%" h="140px" bgColor="accent">
          <Center>
            <Flex>
              <Box paddingRight="8">
                <Text
                  paddingY="3"
                  fontSize="large"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  Top
                </Text>
                <Text
                  paddingBottom="3"
                  fontSize="large"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  企画概要
                </Text>
                <Text
                  paddingBottom="3"
                  fontSize="large"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  過去の美男美女SNAP
                </Text>
              </Box>
              <Box>
                <Text
                  paddingY="3"
                  fontSize="large"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  モデル一覧
                </Text>
                <Text
                  paddingBottom="3"
                  fontSize="large"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  お問い合わせ
                </Text>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box w="100%" h="40px" bgColor="accent">
          <Box paddingLeft="8">
            <Text fontSize="sm">運営 : KADAI INFO</Text>
            <Text fontSize="sm">協賛 : 〇〇, 〇〇</Text>
          </Box>
        </Box>
        <Box w="100%" h="36px" bgColor="accent">
          <Flex marginRight="3" paddingTop="3" justify="flex-end">
            <Text fontSize="xx-small" fontWeight="bold">
              ©KADAI INFO all right reserved.
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  }
}
