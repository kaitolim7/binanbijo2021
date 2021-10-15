import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import ImageItem from "../components/ImageItem";

export default function Model() {
  return (
    <Box w="100%" h="100%">
      <Box marginTop="18px" />
      <Heading>
        <Center fontSize="xl" color="lightblue">
          KADAI INFO
        </Center>
      </Heading>
      <Box marginTop="18px" />
      <Box w="100%" h="200px" bgColor="gray.200">
        <Center>Top画像</Center>
      </Box>
      <Box marginTop="36px" />
      <Heading>
        <Center>MODEL</Center>
      </Heading>
      <Box marginTop="16px" />
      <Flex w="100%" h="100px">
        <Spacer />
        <HeadingBox />
        <Spacer />
        <HeadingBox />
        <Spacer />
      </Flex>
      <SimpleGrid columns={2} spacing={0}>
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
      </SimpleGrid>
    </Box>
  );
}
