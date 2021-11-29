import { Box } from "@chakra-ui/layout";
import HeadingPhotoImage from "../../public/svgs/headingphoto.svg";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingPhoto() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box ml={72} pl={12}>
        <Image src={HeadingPhotoImage} width={200} height={50} />
      </Box>
    );
  }
  return (
    <Box ml={0} pl={0}>
      <Image src={HeadingPhotoImage} />
    </Box>
  );
}
