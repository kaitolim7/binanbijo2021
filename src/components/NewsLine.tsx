import { Box, Divider, Text } from "@chakra-ui/layout";

type Props = {
  height: number;
  date: string;
  content: string;
};

export default function NewsLine(props: Props) {
  return (
    <Box h={props.height} my={3}>
      <Text fontSize={["sm", "md"]}>{props.date}</Text>
      <Text fontSize={["sm", "md"]} align="center">
        {props.content}
      </Text>
      <Divider borderColor="gray.900" />
    </Box>
  );
}
