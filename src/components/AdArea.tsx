import { Box } from "@chakra-ui/layout";

type Props = {
  width: string[];
  height: string[];
  imagePath?: string;
  text: string;
};

export default function AdArea(props: Props) {
  return (
    <Box
      w={[props.width[0], props.width[1]]}
      h={[props.height[0], props.height[1]]}
      bg="red.300"
    >
      {props.text}
    </Box>
  );
}
