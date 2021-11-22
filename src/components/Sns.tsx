import ScheduleImage from "../../public/svgs/schedule.svg";
import Image from "next/image";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import TwitterLogo from "../../public/svgs/personal_twitter.svg";
import InstagramLogo from "../../public/svgs/personal_instagram.svg";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Sns() {
  const isXl = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  if (isXl) {
    return (
      <Flex>
        <Flex paddingRight="3" alignItems="flex-end">
          <Image src={InstagramLogo} width={46} height={46} />
        </Flex>
        <Box marginTop="16px" />
        <Flex paddingRight="3" alignItems="flex-end">
          <Image src={TwitterLogo} width={46} height={46} />
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex>
        <Flex paddingRight="3" alignItems="flex-end">
          <Image src={InstagramLogo} width={36} height={36} />
        </Flex>
        <Box marginTop="16px" />
        <Flex paddingRight="3" alignItems="flex-end">
          <Image src={TwitterLogo} width={36} height={36} />
        </Flex>
      </Flex>
    );
  }
}
