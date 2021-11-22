import { Box } from "@chakra-ui/layout";
import HeadingPhotoImage from "../../public/svgs/headingphoto.svg";
import Image from "next/image";

export default function HeadingPhoto() {
  return (
    <Box ml={[0, 96]} pl={[0, 12]}>
      <Image src={HeadingPhotoImage} />
    </Box>
  );
}
