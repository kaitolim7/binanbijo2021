import { Box, Center, Flex, Text } from "@chakra-ui/layout";

import Image from "next/image";

type Props = {
  day: number;
};

export default function TempImage(props: Props) {
  return (
    <Center>
      <Flex
        alignItems="center"
        justify="center"
        w={[413, 400]}
        h={[620, 600]}
        bgColor="white"
        border="1px"
        borderBottom="2px"
        borderColor="black"
      >
        <Text>12/{props.day} 追加更新予定</Text>
      </Flex>
    </Center>
  );
}
