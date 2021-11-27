import { Box, Center, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import Sns from "./Sns";

type Props = {
  name: string;
  image: string;
  instagram: string;
  twitter: string;
};

export default function Cameraman(props: Props) {
  const isXl = useBreakpointValue({
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  if (isXl) {
    return (
      <Box>
        <Image className="rounded" src={props.image} width={140} height={140} />
        <Center>
          <Text fontSize={20} fontWeight="bold">
            {props.name}
          </Text>
        </Center>
        <Box h={2} />
        <Center>
          <Sns instagram={props.instagram} twitter={props.twitter} />
        </Center>
        <Box marginBottom="3" />
      </Box>
    );
  } else {
    return (
      <Box>
        <Image className="rounded" src={props.image} width={100} height={100} />
        <Center>
          <Text fontSize={16} fontWeight="bold">
            {props.name}
          </Text>
        </Center>
        <Box h={2} />
        <Center w={100}>
          <Sns instagram={props.instagram} twitter={props.twitter} />
        </Center>
        <Box marginBottom="3" />
      </Box>
    );
  }
}
