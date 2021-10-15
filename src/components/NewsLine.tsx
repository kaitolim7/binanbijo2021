import { Box, Divider, Text } from "@chakra-ui/layout";
import theme from "../../styles/theme";

export default function NewsLine() {
  return (
    <Box>
      <Text fontSize="sm">2021.12.15</Text>
      <Text fontSize="sm" align="center">
        モデル画像「PHOTO」が追加されました。
      </Text>
      <Divider borderColor="gray.900" />
    </Box>
  );
}
