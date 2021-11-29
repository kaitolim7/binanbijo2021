import Image from "next/image";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import TwitterLogo from "../../public/svgs/personal_twitter.svg";
import InstagramLogo from "../../public/svgs/personal_instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useRouter } from "next/dist/client/router";

type Props = {
  instagram: string;
  twitter: string;
};

export default function Sns(props: Props) {
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
      <Flex justify="center">
        <Flex alignItems="flex-end">
          {instaLink ? (
            <Image
              src={InstagramLogo}
              width={36}
              height={36}
              onClick={() => router.push(instaLink)}
            />
          ) : (
            <></>
          )}
        </Flex>
        <Flex alignItems="flex-end">
          {twitterLink ? (
            <>
              <Box w={1} />
              <Image
                src={TwitterLogo}
                width={36}
                height={36}
                onClick={() => router.push(twitterLink)}
              />
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex>
        <Flex alignItems="flex-end">
          {instaLink ? (
            <Image
              src={InstagramLogo}
              width={36}
              height={36}
              onClick={() => router.push(instaLink)}
            />
          ) : (
            <></>
          )}
        </Flex>
        <Flex alignItems="flex-end">
          {twitterLink ? (
            <>
              <Box w={1} />
              <Image
                src={TwitterLogo}
                width={36}
                height={36}
                onClick={() => router.push(twitterLink)}
              />
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    );
  }
}
