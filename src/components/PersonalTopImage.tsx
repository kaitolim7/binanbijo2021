import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import PersonalSns from "./PersonalSns";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { ImageProps } from "./ImageSliderItem";

type Props = {
  topImage: ImageProps;
  entryNumber: string;
  name: string;
  faculty: string;
  from: string;
  club: string;
  instagram: string;
  twitter: string;
};

export default function PersonalTopImage(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box w="100%">
      <Box w="100%" position="relative">
        <Flex>
          {isXl ? (
            <Text
              position="absolute"
              top="3%"
              left="25%"
              zIndex="1"
              borderColor="black"
              border="2px"
              bgColor="white"
              fontSize="3xl"
              fontWeight="bold"
              padding="2"
            >
              No.{props.entryNumber} {props.name}
            </Text>
          ) : (
            <Text
              position="absolute"
              top="4"
              zIndex="1"
              borderColor="black"
              border="2px"
              borderStart={["inherit", "unset"]}
              bgColor="white"
              fontSize="2xl"
              fontWeight="bold"
              padding="2"
            >
              No.{props.entryNumber} {props.name}
            </Text>
          )}
          <Spacer />
          <PersonalSns instagram={props.instagram} twitter={props.twitter} />
        </Flex>

        <Box w="100%" h="100%" position="relative">
          {isXl ? (
            <Center mt={16}>
              <Center w={600}>
                <Image
                  src={props.topImage.url}
                  width={props.topImage.width}
                  height={props.topImage.height}
                />
              </Center>
            </Center>
          ) : (
            <Center>
              <Image
                src={props.topImage.url}
                width={props.topImage.width}
                height={props.topImage.height}
              />
            </Center>
          )}
        </Box>

        <Flex justify={["flex-end", "center"]}>
          {isXl ? (
            <Text fontSize="md" fontWeight="bold" padding="2" ml={96}>
              ⚫ {props.faculty} &nbsp;&nbsp;⚫ 出身 / {props.from}&nbsp;&nbsp;
              ⚫ サークル / {props.club}
            </Text>
          ) : (
            <Text fontSize="sm" fontWeight="bold" padding="2">
              ⚫ {props.faculty} &nbsp;&nbsp;⚫ 出身 / {props.from}&nbsp;&nbsp;
              ⚫ サークル / {props.club}
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
