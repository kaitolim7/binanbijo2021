import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import TwitterLogo from "../../public/svgs/twitter.svg";
import YouTubeLogo from "../../public/svgs/youtube.svg";
import InstagramLogo from "../../public/svgs/instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import OurSns from "../../public/svgs/oursns.svg";
import KadaiInfoMenuBoxRotate from "../../public/svgs/menu_box_rotate.svg";
import { useRouter } from "next/dist/client/router";

export default function Menu() {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Flex justify="center" bgColor="accent">
        <Box mt={8} mb={5}>
          <Center>
            <Image src={KadaiInfoMenuBoxRotate} />
          </Center>
          <Flex justifyContent="center" alignItems="center" mt={14}>
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
          </Flex>
        </Box>
        <Box mt={8} mb={5}>
          <Flex justify="center">
            <Text
              fontWeight="bold"
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("/")}
            >
              Top
            </Text>
            <Text
              fontWeight="bold"
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("/intro")}
            >
              企画概要
            </Text>
          </Flex>
          <Flex justify="center" paddingTop="8">
            <Text
              fontWeight="bold"
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("/model")}
            >
              モデル一覧
            </Text>
            <Text
              fontWeight="bold"
              paddingRight="8"
              fontSize="xl"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("/photographer")}
            >
              カメラマン紹介
            </Text>
          </Flex>
          <Flex alignItems="center" justify="center" flexDir="column" mt={8}>
            <Text
              padding={2}
              fontSize="l"
              fontWeight="bold"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              過去の美男美女SNAP
            </Text>
            <Text
              padding={2}
              fontSize="l"
              fontWeight="bold"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              お問い合わせ
            </Text>
            <Text
              padding={2}
              fontSize="l"
              fontWeight="bold"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              KADAIINFOとは
            </Text>
          </Flex>
        </Box>
      </Flex>
    );
  } else {
    return (
      <Box>
        <Box w="100%" h="160px" bgColor="accent">
          <Center>
            <Flex>
              <Box paddingRight="8">
                <Text
                  paddingY="6"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  onClick={() => router.push("/")}
                >
                  Top
                </Text>
                <Text
                  paddingBottom="6"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  onClick={() => router.push("/intro")}
                >
                  企画概要
                </Text>
                <Text
                  paddingBottom="6"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  過去の美男美女SNAP
                </Text>
                <Text
                  paddingBottom="6"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  KADAI INFOとは
                </Text>
              </Box>
              <Box>
                <Text
                  paddingY="6"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  onClick={() => router.push("/model")}
                >
                  モデル一覧
                </Text>
                <Text
                  paddingBottom="6"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  onClick={() => router.push("/photographer")}
                >
                  カメラマン一覧
                </Text>
                <Text
                  paddingBottom="6"
                  fontSize="large"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  fontWeight="bold"
                >
                  お問い合わせ
                </Text>
                <Box ml={5}>
                  <Image src={KadaiInfoMenuBoxRotate} />
                </Box>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box w="100%" bgColor="accent" paddingTop="28">
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            paddingTop="2"
            paddingLeft="6"
          >
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
      </Box>
    );
  }
}
