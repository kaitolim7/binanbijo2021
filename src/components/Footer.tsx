import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import TwitterLogo from "../../public/images/twitter_icon.png";
import YouTubeLogo from "../../public/images/youtube_icon.png";
import InstagramLogo from "../../public/images/instagram_icon.png";

export default function Footer() {
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
      <Box w="100%" h="40px" bgColor="gray.400">
        <Flex marginRight="8" justify="flex-end">
          <Text fontSize="sm">運営 : KADAI INFO</Text>
        </Flex>
      </Box>
    </Box>
  );
}
