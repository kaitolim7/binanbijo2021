import RightScrollIcon from "../../public/svgs/scroll_icon.svg";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";

export default function LeftIcon({ onClick }: any) {
  return (
    <Box
      position="absolute"
      zIndex="1"
      top="48%"
      left="0.5"
      transform="scale(-1, 1)"
    >
      <Image
        src={RightScrollIcon}
        width={28}
        height={28}
        onClick={() => onClick()}
      />
    </Box>
  );
}
