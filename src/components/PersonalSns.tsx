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
  const instaLink = props.instagram
    ? `https://www.instagram.com/${props.instagram.replace("@", "")}`
    : "";
  const twitterLink = props.twitter
    ? `https://twitter.com/${props.twitter.replace("@", "")}`
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
      <Box zIndex="overlay" position="absolute" top="10%" right="28%">
        <Text fontSize="mdß" fontWeight="bold">
          \ check it /
        </Text>
        <Flex flexDir="column" marginLeft="5" marginTop="2">
          <Flex paddingRight="3" alignItems="flex-end">
            <Image
              src={InstagramLogo}
              width={46}
              height={46}
              onClick={() => router.push(instaLink)}
            />
          </Flex>
          <Box marginTop="16px" />
          <Flex paddingRight="3" alignItems="flex-end">
            <Image
              src={TwitterLogo}
              width={46}
              height={46}
              onClick={() => router.push(twitterLink)}
            />
          </Flex>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box paddingBottom="1">
        <Text fontSize="sm" fontWeight="bold" textAlign="center">
          \ check it /&nbsp;&nbsp;&nbsp;
        </Text>
        <Sns instagram={props.instagram} twitter={props.twitter} />
      </Box>
    );
  }
}
