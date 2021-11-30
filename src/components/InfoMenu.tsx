import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import TwitterLogo from "../../public/svgs/twitter.svg";
import YouTubeLogo from "../../public/svgs/youtube.svg";
import InstagramLogo from "../../public/svgs/instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import OurSns from "../../public/svgs/oursns.svg";
import MobileOurSns from "../../public/images/oursns.png";
import KadaiInfoMenuBoxRotate from "../../public/svgs/menu_box_rotate.svg";
import { useRouter } from "next/dist/client/router";
import { Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
};

export default function InfoMenu(props: Props) {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  const handleClick = (href: string) => {
    router.push(href);
    props.onClose();
  };

  if (isXl) {
    return (
      <Flex justify="center" bgColor="accent" shadow="md">
        <Box mt={8} mb={5}>
          <Center>
            <Image src={KadaiInfoMenuBoxRotate} />
          </Center>
          <Flex justifyContent="center" alignItems="center" mt={14}>
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
              onClick={() => handleClick("/")}
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
              onClick={() => handleClick("/intro")}
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
              onClick={() => handleClick("/model")}
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
              onClick={() => handleClick("/photographer")}
            >
              カメラマン紹介
            </Text>
          </Flex>
          <Flex alignItems="center" justify="center" flexDir="column" mt={8}>
            <Menu>
              <>
                <MenuButton
                  padding={2}
                  fontSize="l"
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
              padding={2}
              fontSize="l"
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
              padding={2}
              fontSize="l"
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
      </Flex>
    );
  } else {
    return (
      <Box shadow="md" bgColor="accent">
        <Box w="100%" h="160px">
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
                  onClick={() => handleClick("/")}
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
                  onClick={() => handleClick("/intro")}
                >
                  企画概要
                </Text>
                <Menu>
                  <>
                    <MenuButton
                      paddingBottom="6"
                      fontSize="large"
                      fontWeight="bold"
                      _hover={{
                        textDecoration: "underline",
                        textUnderlinePosition: "under",
                      }}
                    >
                      過去の美男美女SNAP
                    </MenuButton>
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
                  </>
                </Menu>

                <Text
                  paddingBottom="6"
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
                  onClick={() => handleClick("/model")}
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
                  onClick={() => handleClick("/photographer")}
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
                  onClick={() => router.push("https://kadai-info.com/contact")}
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
        <Box w="100%" paddingTop="28">
          <Flex justifyContent="flex-start" alignItems="center" paddingTop="2">
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
      </Box>
    );
  }
}
