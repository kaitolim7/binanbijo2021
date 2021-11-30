import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import RightArrow from "../../public/svgs/right_arrow.svg";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

type Props = {
  text: string;
  topage: string;
};

export default function IntroLinkBox(props: Props) {
  const router = useRouter();
  return (
    <Center
      w="300px"
      h="60px"
      marginX="auto"
      borderRadius="full"
      borderColor="black"
      borderWidth="medium"
      _hover={{ bgColor: "accent" }}
      onClick={() => router.push(props.topage)}
    >
      <Flex>
        <Text fontWeight="bold" fontSize="xl" pb={0.5}>
          &nbsp;&nbsp;&nbsp;{props.text}&nbsp;&nbsp;&nbsp;
        </Text>
        <Image src={RightArrow} />
      </Flex>
    </Center>
  );
}
