import RightScrollIcon from "../../public/images/rightscrollicon.png";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";
export default function RightIcon() {
  return (
    <Box className="absolute-right">
      <Image src={RightScrollIcon} width={36} height={36} />
    </Box>
  );
}
