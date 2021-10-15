import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";

export default function ImageSliderItem() {
  return (
    <Box padding="8px">
      <Image src={Test} width={180} height={140} />
    </Box>
  );
}
