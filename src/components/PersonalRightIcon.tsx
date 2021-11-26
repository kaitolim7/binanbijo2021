import RightScrollIcon from "../../public/svgs/scroll_icon.svg";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";

export default function RightIcon({ onClick }: any) {
  return (
    <Box position="absolute" zIndex="1" top="45%" right="0.5">
      <Image
        src={RightScrollIcon}
        width={28}
        height={28}
        onClick={() => onClick()}
      />
    </Box>
  );
}
