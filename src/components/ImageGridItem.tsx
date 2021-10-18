import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function ImageGridItem() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  return (
    <Flex padding="8px" flexDir="column">
      <Flex>
        <Text
          marginX="3"
          borderColor="black"
          borderWidth="thin"
          fontSize="x-small"
          fontWeight="bold"
          bgColor="yellow"
          paddingTop="0.5"
          paddingX="3"
        >
          FINAL決定
        </Text>
      </Flex>
      {isXl ? (
        <Image src={Test} width={300} height={220} />
      ) : (
        <Image src={Test} width={180} height={140} />
      )}

      <Flex>
        <Spacer />
        <Text fontSize="md" fontWeight="bold">
          No.1
        </Text>
        <Spacer />
        <Text fontSize="md" fontWeight="bold">
          さきっちょ
        </Text>
        <Spacer />
      </Flex>
    </Flex>
  );
}
