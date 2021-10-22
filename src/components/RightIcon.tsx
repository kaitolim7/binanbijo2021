import RightScrollIcon from "../../public/svgs/scroll_icon.svg";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";
export default function RightIcon() {
  return (
    <Box position="absolute" zIndex="overlay" top="39%" right="0.5">
      <Image src={RightScrollIcon} width={28} height={28} />
    </Box>
  );
}
