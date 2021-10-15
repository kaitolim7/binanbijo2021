import Test from "../../public/images/parker.jpeg";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";

export default function ImageItem() {
  return (
    <Box padding="8px">
      <Image src={Test} width={180} height={140} />
    </Box>
  );
}
