import { Box, Center, Text } from "@chakra-ui/layout";
import Image from "next/image";

import Test from "../../public/images/parker.jpeg";
import PersonalSns from "./PersonalSns";

export default function Cameraman() {
  return (
    <Box>
      <Image className="rounded" src={Test} width={100} height={100} />
      <Center>
        <Text fontSize={20} fontWeight="bold">
          安
        </Text>
      </Center>
      <Center paddingLeft="2.5">
        <PersonalSns disable={true} />
      </Center>
      <Box marginBottom="3" />
    </Box>
  );
}
