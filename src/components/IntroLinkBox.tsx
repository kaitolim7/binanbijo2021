import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";

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
    >
      <Text fontWeight="bold" fontSize="xl">
        &nbsp;&nbsp;&nbsp;{props.text} →
      </Text>
    </Center>
  );
}
