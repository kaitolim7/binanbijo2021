import { Box, Flex, Text } from "@chakra-ui/layout";

type Props = {
  num: number;
  title: string;
  content: string;
};

export default function InterviewItem(props: Props) {
  return (
    <Box w={[160, 200]} h={[160, 200]} border="1px" borderColor="black">
      <Flex paddingY={3} alignItems="center">
        <Text fontSize={[23, 36]} fontWeight="bold" paddingX={3.5}>
          {props.num}
        </Text>
        <Text fontSize={[11, 14]} fontWeight="bold">
          {props.title}
        </Text>
      </Flex>
      <Text fontSize={[13, 16]} marginLeft={3} marginRight={1}>
        {props.content}
      </Text>
    </Box>
  );
}
