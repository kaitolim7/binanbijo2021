import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import Image from "next/image";
import TwitterLogo from "../../public/svgs/personal_twitter.svg";
import InstagramLogo from "../../public/svgs/personal_instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Sns from "./Sns";
import { useRouter } from "next/dist/client/router";

type Props = {
  instagram: string;
  twitter: string;
};

export default function PersonalSns(props: Props) {
  const instaLink =
    props.instagram != "null"
      ? `https://www.instagram.com/${props.instagram.replace("@", "")}/`
      : "";
  const twitterLink =
    props.twitter != "null"
      ? `https://twitter.com/${props.twitter.replace("@", "")}/`
      : "";

  const router = useRouter();
  const isXl = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  if (isXl) {
    return (
      <Box zIndex="1" position="absolute" top="8%" right="23%">
        {instaLink || twitterLink ? (
          <Text fontSize="md" fontWeight="bold">
            \ check it /
          </Text>
        ) : (
          <></>
        )}
        <Flex flexDir="column" marginLeft="5" marginTop="2">
          <Flex alignItems="flex-end">
            {instaLink ? (
              <Image
                src={InstagramLogo}
                width={46}
                height={46}
                onClick={() => router.push(instaLink)}
              />
            ) : (
              <></>
            )}
          </Flex>
          {instaLink && <Box h={2} />}
          <Flex alignItems="flex-end">
            {twitterLink ? (
              <>
                <Image
                  src={TwitterLogo}
                  width={46}
                  height={46}
                  onClick={() => router.push(twitterLink)}
                />
              </>
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box paddingBottom="1">
        {instaLink || twitterLink ? (
          <Text fontSize="sm" fontWeight="bold" textAlign="center">
            \ check it /&nbsp;&nbsp;&nbsp;
          </Text>
        ) : (
          <Box h={61} />
        )}
        <Center mr={2}>
          <Sns instagram={props.instagram} twitter={props.twitter} />
        </Center>
      </Box>
    );
  }
}
