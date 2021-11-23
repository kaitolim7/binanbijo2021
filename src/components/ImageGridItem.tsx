import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

type Props = {
  image?: string;
  id: number;
  entryNumber: number;
  name: string;
};

export default function ImageGridItem(props: Props) {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  return (
    <Flex padding="8px" flexDir="column">
      {/* <Flex>
        <Text
          marginX="3"
          borderColor="black"
          borderWidth="thin"
          fontSize={["x-small", "sm"]}
          fontWeight="bold"
          bgColor="accent"
          paddingTop="0.5"
          paddingX="3"
        >
          FINAL決定
        </Text>
      </Flex> */}
      {isXl ? (
        <Image
          src={Test}
          width={300}
          height={220}
          onClick={() => router.push("/" + props.id)}
        />
      ) : (
        <Image
          src={Test}
          width={180}
          height={140}
          onClick={() => router.push("/" + props.id)}
        />
      )}

      <Flex>
        <Spacer />
        <Text fontSize="md" fontWeight="bold">
          No.{props.entryNumber}
        </Text>
        <Spacer />
        <Text fontSize="md" fontWeight="bold">
          {props.name}
        </Text>
        <Spacer />
      </Flex>
    </Flex>
  );
}
