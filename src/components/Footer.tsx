import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import TwitterLogo from "../../public/images/twitter_icon.png";
import YouTubeLogo from "../../public/images/youtube_icon.png";
import InstagramLogo from "../../public/images/instagram_icon.png";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Footer() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box>
        <Box w="100%" h="100px" bgColor="gray.400">
          <Flex as="u" justify="center" paddingTop="8">
            <Text paddingRight="8" fontSize="xl">
              Top
            </Text>
            <Text paddingRight="8" fontSize="xl">
              企画概要
            </Text>
            <Text paddingRight="8" fontSize="xl">
              過去の美男美女SNAP
            </Text>

            <Text paddingRight="8" fontSize="xl">
              モデル一覧
            </Text>
            <Text paddingRight="8" fontSize="xl">
              お問い合わせ
            </Text>
          </Flex>
        </Box>
        <Box w="100%" h="60px" bgColor="gray.400">
          <Flex justify="center">
            <Text fontSize="large" fontWeight="bold">
              our sns
            </Text>
            <Box paddingX="3">
              <Image src={TwitterLogo} width={36} height={36} />
            </Box>
            <Box paddingRight="3">
              <Image src={InstagramLogo} width={36} height={36} />
            </Box>
            <Box paddingRight="3">
              <Image src={YouTubeLogo} width={40} height={36} />
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
        <Box w="100%" h="60px" bgColor="gray.400">
          <Flex justify="flex-end" paddingTop="4">
            <Text fontSize="large" fontWeight="bold">
              our sns
            </Text>
            <Box paddingX="3">
              <Image src={TwitterLogo} width={36} height={36} />
            </Box>
            <Box paddingRight="3">
              <Image src={InstagramLogo} width={36} height={36} />
            </Box>
            <Box paddingRight="3">
              <Image src={YouTubeLogo} width={40} height={36} />
            </Box>
          </Flex>
        </Box>
        <Box w="100%" h="140px" bgColor="gray.400">
          <Center>
            <Flex as="u">
              <Box paddingRight="8">
                <Text paddingY="3" fontSize="large">
                  Top
                </Text>
                <Text paddingBottom="3" fontSize="large">
                  企画概要
                </Text>
                <Text paddingBottom="3" fontSize="large">
                  過去の美男美女SNAP
                </Text>
              </Box>
              <Box>
                <Text paddingY="3" fontSize="large">
                  モデル一覧
                </Text>
                <Text paddingBottom="3" fontSize="large">
                  お問い合わせ
                </Text>
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box w="100%" h="40px" bgColor="gray.400">
          <Box paddingLeft="8">
            <Text fontSize="sm">運営 : KADAI INFO</Text>
            <Text fontSize="sm">協賛 : 〇〇, 〇〇</Text>
          </Box>
        </Box>
        <Box w="100%" h="36px" bgColor="gray.400">
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
