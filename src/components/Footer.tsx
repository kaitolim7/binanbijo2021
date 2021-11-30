import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import TwitterLogo from "../../public/svgs/twitter.svg";
import YouTubeLogo from "../../public/svgs/youtube.svg";
import InstagramLogo from "../../public/svgs/instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import OurSns from "../../public/svgs/oursns.svg";
import MobileOurSns from "../../public/images/oursns.png";
import KadaiInfoBox from "../../public/images/binanbijo_logo.png";
import { useRouter } from "next/dist/client/router";
import { Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";

export default function Footer() {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box>
        <Box w="100%" h="100px" bgColor="accent" position="relative">
          <Box position="absolute" top="-100%" left="1%">
            <Image src={KadaiInfoBox} width={200} height={200} />
          </Box>
          <Flex justify="center" paddingTop="8">
            <Text
              paddingRight="8"
              fontSize="xl"
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
              paddingRight="8"
              fontSize="xl"
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
              paddingRight="8"
              fontSize="xl"
              fontWeight="bold"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("/photographer")}
            >
              カメラマン紹介
            </Text>
            <Menu>
              <>
                <MenuButton
                  paddingRight="8"
                  fontSize="xl"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  過去の美男美女SNAP
                </MenuButton>
                <MenuList>
                  <MenuList>
                    <MenuItem
                      onClick={() =>
                        router.push("https://binanbijosnap2020.web.app/")
                      }
                    >
                      2020
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        router.push(
                          "https://kadai-info.com/2019/12/02/binanbijo2019"
                        )
                      }
                    >
                      2019
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        router.push("https://kadai-info.com/kadai-bb18")
                      }
                    >
                      2018
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        router.push(
                          "https://kadai-info.com/2017/11/28/binanbijo2017"
                        )
                      }
                    >
                      2017
                    </MenuItem>
                  </MenuList>
                </MenuList>
              </>
            </Menu>

            <Text
              paddingRight="8"
              fontSize="xl"
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
              paddingRight="8"
              fontSize="xl"
              fontWeight="bold"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("https://kadai-info.com/contact")}
            >
              お問い合わせ
            </Text>
            <Text
              paddingRight="8"
              fontSize="xl"
              fontWeight="bold"
              _hover={{
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              onClick={() => router.push("https://kadai-info.com/lp/about-us/")}
            >
              KADAIINFOとは
            </Text>
          </Flex>
        </Box>
        <Box w="100%" bgColor="accent">
          <Flex justifyContent="center" alignItems="center">
            <Box paddingBottom="2" paddingRight="2.5">
              <Image src={OurSns} />
            </Box>
            <Box paddingX="3">
              <Image
                src={InstagramLogo}
                width={44}
                height={44}
                onClick={() =>
                  router.push(
                    "https://instagram.com/kadai_info_snap?utm_medium=copy_link"
                  )
                }
              />
            </Box>
            <Box paddingRight="3">
              <Image
                src={TwitterLogo}
                width={58}
                height={58}
                onClick={() =>
                  router.push("https://twitter.com/snap20204?s=21")
                }
              />
            </Box>
            <Box paddingRight="3">
              <Image
                src={YouTubeLogo}
                width={44}
                height={38}
                onClick={() =>
                  router.push(
                    "https://www.youtube.com/channel/UCqxPxhuAV9XC5S1Fyf-_E5w"
                  )
                }
              />
            </Box>
            <Text fontSize="sm" paddingTop="3.5" paddingX="8">
              運営 : KADAI INFO
            </Text>
            <Text fontSize="sm" paddingTop="3.5" paddingRight="8">
              協賛 : 株式会社てんげん,
              星のセレクトショップ『まよなかのアトリエ』
            </Text>
            <Text fontSize="sm" fontWeight="bold" paddingTop="3.5">
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
          <Box position="absolute" bottom="-6" left="-3">
            <Image src={KadaiInfoBox} width={160} height={160} />
          </Box>
          <Flex justifyContent="flex-end" alignItems="center" paddingTop="2">
            <Box w={120} paddingBottom="0.5" mr="-2">
              <Image src={MobileOurSns} />
            </Box>
            <Box paddingRight="1">
              <Image
                src={InstagramLogo}
                width={36}
                height={36}
                onClick={() =>
                  router.push(
                    "https://instagram.com/kadai_info_snap?utm_medium=copy_link"
                  )
                }
              />
            </Box>
            <Box paddingRight="1">
              <Image
                src={TwitterLogo}
                width={48}
                height={48}
                onClick={() =>
                  router.push("https://twitter.com/snap20204?s=21")
                }
              />
            </Box>
            <Box paddingRight="4">
              <Image
                src={YouTubeLogo}
                width={40}
                height={36}
                onClick={() =>
                  router.push(
                    "https://www.youtube.com/channel/UCqxPxhuAV9XC5S1Fyf-_E5w"
                  )
                }
              />
            </Box>
          </Flex>
        </Box>
        <Box w="100%" bgColor="accent">
          <Center>
            <Flex>
              <Box paddingRight="8">
                <Text
                  paddingY="3"
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
                  paddingBottom="3"
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
                  paddingBottom="3"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  onClick={() =>
                    router.push("https://kadai-info.com/lp/about-us/")
                  }
                >
                  KADAIINFOとは
                </Text>
              </Box>
              <Box>
                <Text
                  paddingY="3"
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
                  paddingBottom="3"
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
                  paddingBottom="3"
                  fontSize="large"
                  fontWeight="bold"
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                  onClick={() => router.push("https://kadai-info.com/contact")}
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
            <Text fontSize="sm">
              協賛 : 株式会社てんげん, まよなかのアトリエ
            </Text>
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
