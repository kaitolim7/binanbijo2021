import { Box, Flex, Text } from "@chakra-ui/layout";

type Props = {
  num: number;
  title: string;
  content: string;
};

export default function InterviewItem(props: Props) {
  return (
    <>
      {props.content?.length < 80 ? (
        <Box w={[160, 200]} h={[160, 200]} border="1px" borderColor="black">
          <Flex paddingY={3} alignItems="center">
            <Text
              fontSize={props.content?.length < 58 ? [23, 36] : [14, 23]}
              fontWeight="bold"
              paddingX={3.5}
            >
              {props.num}
            </Text>
            <Text
              fontSize={props.content?.length < 58 ? [11, 14] : [10, 11]}
              fontWeight="bold"
              paddingRight={2}
            >
              {props.title}
            </Text>
          </Flex>
          <Text
            fontSize={props.content?.length < 58 ? [13, 16] : [10, 11]}
            marginLeft={3}
            marginRight={1}
          >
            {props.content}
          </Text>
        </Box>
      ) : (
        <Box w={[160, 200]} h={[200, 200]} border="1px" borderColor="black">
          <Flex paddingY={3} alignItems="center">
            <Text fontSize={[14, 23]} fontWeight="bold" paddingX={3.5}>
              {props.num}
            </Text>
            <Text fontSize={[10, 11]} fontWeight="bold">
              {props.title}
            </Text>
          </Flex>
          <Text
            fontSize={[10, 11]}
            marginLeft={3}
            marginRight={1}
            mt={[-2, -2]}
          >
            {props.content}
          </Text>
        </Box>
      )}
    </>
  );
}
