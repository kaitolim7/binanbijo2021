import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import Image from "next/image";
import TwitterLogo from "../../public/images/twitter_icon.png";
import InstagramLogo from "../../public/images/instagram_icon.png";

export default function PersonalSns() {
  return (
    <Box paddingBottom="1">
      <Text fontSize="sm" fontWeight="bold" textAlign="center">
        \ check it /&nbsp;&nbsp;&nbsp;
      </Text>
      <Flex>
        <Flex paddingRight="3" alignItems="flex-end">
          <Image src={InstagramLogo} width={36} height={36} />
        </Flex>
        <Flex paddingRight="3" alignItems="flex-end">
          <Image src={InstagramLogo} width={36} height={36} />
        </Flex>
      </Flex>
    </Box>
  );
}
