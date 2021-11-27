import { Box, Flex, Text } from "@chakra-ui/layout";

import Image from "next/image";

type Props = {
  day: number;
};

export default function TempImage(props: Props) {
  return (
    <Flex
      alignItems="center"
      justify="center"
      w={[375, 400]}
      h={[562.5, 600]}
      bgColor="white"
      border="1px"
      borderBottom="2px"
      borderColor="black"
    >
      <Text>12/{props.day} 追加更新予定</Text>
    </Flex>
  );
}
