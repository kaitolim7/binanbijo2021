import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import RightArrow from "../../public/svgs/right_arrow.svg";
import Image from "next/image";

type Props = {
  text: string;
};

export default function IntroLinkBox(props: Props) {
  return (
    <Center
      w="300px"
      h="60px"
      marginX="auto"
      borderRadius="full"
      borderColor="black"
      borderWidth="medium"
      _hover={{ bgColor: "accent" }}
    >
      <Flex>
        <Text fontWeight="bold" fontSize="xl">
          &nbsp;&nbsp;&nbsp;{props.text}&nbsp;&nbsp;&nbsp;
        </Text>
        <Image src={RightArrow} />
      </Flex>
    </Center>
  );
}
