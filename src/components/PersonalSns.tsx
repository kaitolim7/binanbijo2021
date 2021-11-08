import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import Image from "next/image";
import TwitterLogo from "../../public/svgs/personal_twitter.svg";
import InstagramLogo from "../../public/svgs/personal_instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";

type Props = {
  disable?: boolean;
};

export default function PersonalSns(props: Props) {
  const isXl = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  if (isXl) {
    return (
      <Box zIndex="overlay" position="absolute" right="23%" marginRight="20">
        <Text fontSize="mdß" fontWeight="bold">
          \ check it /
        </Text>
        <Flex flexDir="column" marginLeft="5" marginTop="2">
          <Flex paddingRight="3" alignItems="flex-end">
            <Image src={InstagramLogo} width={46} height={46} />
          </Flex>
          <Box marginTop="16px" />
          <Flex paddingRight="3" alignItems="flex-end">
            <Image src={TwitterLogo} width={46} height={46} />
          </Flex>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box paddingBottom="1">
        <Text
          fontSize="sm"
          fontWeight="bold"
          textAlign="center"
          hidden={props.disable}
        >
          \ check it /&nbsp;&nbsp;&nbsp;
        </Text>
        <Flex>
          <Flex paddingRight="3" alignItems="flex-end">
            <Image src={InstagramLogo} width={36} height={36} />
          </Flex>
          <Box marginTop="16px" />
          <Flex paddingRight="3" alignItems="flex-end">
            <Image src={TwitterLogo} width={36} height={36} />
          </Flex>
        </Flex>
      </Box>
    );
  }
}
