import Image from "next/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useRouter } from "next/dist/client/router";

type Props = {
  topImage: {
    url: string;
  };
  id: number;
  entryNumber: number;
  name: string;
};

export default function ImageGridItem(props: Props) {
  const router = useRouter();
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  return (
    <Flex flexDir="column">
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
        <Box className="sample1">
          <Image src={props.topImage.url} width={300} height={200} />
          <Box className="mask" onClick={() => router.push("/" + props.id)}>
            <Box className="caption">view more</Box>
          </Box>
        </Box>
      ) : (
        <Box className="sample3">
          <Image
            src={props.topImage.url}
            width={300}
            height={200}
            onClick={() => router.push("/" + props.id)}
          />
          <Box className="mask" onClick={() => router.push("/" + props.id)}>
            <Box className="caption">view more</Box>
          </Box>
        </Box>
      )}

      <Flex>
        <Spacer />
        <Text fontSize={["sm", "md"]} fontWeight="bold">
          No.{props.entryNumber}
        </Text>
        <Spacer />
        <Text fontSize={["sm", "md"]} fontWeight="bold">
          {props.name}
        </Text>
        <Spacer />
      </Flex>
    </Flex>
  );
}
