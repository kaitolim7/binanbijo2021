import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import AdArea from "./AdArea";
import IntroLinkBox from "./IntroLinkBox";

export default function PersonalAdArea() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box>
        <Flex>
          <Spacer />
          <Spacer />
          <Spacer />
          <Center>
            <AdArea
              width={["320px", "640px"]}
              height={["100px", "200px"]}
              text="広告B①"
            />
          </Center>
          <Spacer />
          <Center>
            <AdArea
              width={["320px", "640px"]}
              height={["100px", "200px"]}
              text="広告B①"
            />
          </Center>
          <Spacer />
          <Spacer />
          <Spacer />
        </Flex>
        <Box marginTop="12px" />
        <Flex>
          <Spacer />
          <Spacer />
          <Spacer />
          <Center>
            <AdArea
              width={["234px", "540px"]}
              height={["60px", "180px"]}
              text="広告C①"
            />
          </Center>
          <Spacer />
          <Center>
            <AdArea
              width={["234px", "540px"]}
              height={["60px", "180px"]}
              text="広告C①"
            />
          </Center>
          <Spacer />
          <Spacer />
          <Spacer />
        </Flex>
        <Box marginTop="36px" />
        <Box w="100%">
          <Center>
            <Center
              paddingX="5"
              borderColor="black"
              borderWidth="thin"
              borderTop="hidden"
              borderX="hidden"
            >
              <Text fontSize="xl">撮影 : ahn</Text>
            </Center>
          </Center>
        </Box>
        <Box marginTop="36px" />
        <IntroLinkBox text="この人に投票する" />
        <Box marginTop="16px" />
        <IntroLinkBox text="他のモデルを見る" />
      </Box>
    );
  } else {
    return (
      <Box>
        <Center
          marginX="32"
          borderColor="black"
          borderWidth="thin"
          borderTop="hidden"
          borderX="hidden"
        >
          <Text fontSize="xl">撮影 : ahn</Text>
        </Center>
        <Box marginTop="36px" />
        <IntroLinkBox text="この人に投票する" />
        <Box marginTop="16px" />
        <IntroLinkBox text="他のモデルを見る" />
        <Box marginTop="36px" />
        <Box w="100%">
          <Center>
            <AdArea
              width={["320px", "640px"]}
              height={["100px", "200px"]}
              text="広告B①"
            />
          </Center>
        </Box>
        <Box marginTop="12px" />
        <Box w="100%">
          <Center>
            <AdArea
              width={["320px", "640px"]}
              height={["100px", "200px"]}
              text="広告B①"
            />
          </Center>
        </Box>
        <Box marginTop="12px" />
        <Box w="100%">
          <Center>
            <AdArea
              width={["234px", "540px"]}
              height={["60px", "180px"]}
              text="広告C①"
            />
          </Center>
        </Box>
        <Box marginTop="12px" />
        <Box w="100%">
          <Center>
            <AdArea
              width={["234px", "540px"]}
              height={["60px", "180px"]}
              text="広告C①"
            />
          </Center>
        </Box>
      </Box>
    );
  }
}
