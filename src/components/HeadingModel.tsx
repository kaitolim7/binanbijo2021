import { Box } from "@chakra-ui/layout";
import HeadingModelImage from "../../public/svgs/headingmodel.svg";
import MobileModelImage from "../../public/images/model.png";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingModel() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  return (
    <Box ml={[0, 80]}>
      {isXl ? (
        <Image src={HeadingModelImage} />
      ) : (
        <Box w={200} pr={3} mb={-2}>
          <Image src={MobileModelImage} />
        </Box>
      )}
    </Box>
  );
}
