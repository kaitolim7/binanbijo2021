import { Box, Divider, Text } from "@chakra-ui/layout";

type Props = {
  height: number;
};

export default function NewsLine(props: Props) {
  return (
    <Box h={props.height}>
      <Text fontSize="sm">2021.12.15</Text>
      <Text fontSize="sm" align="center">
        モデル画像「PHOTO」が追加されました。
      </Text>
      <Divider borderColor="gray.900" />
    </Box>
  );
}
