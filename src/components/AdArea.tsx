import { Box } from "@chakra-ui/layout";

type Props = {
  width: string;
  height: string;
  imagePath?: string;
  text: string;
};

export default function AdArea(props: Props) {
  return (
    <Box w={props.width} h={props.height} bg="red.300">
      {props.text}
    </Box>
  );
}
