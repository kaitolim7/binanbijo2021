import { Box } from "@chakra-ui/layout";
import HeadingProfileImage from "../../public/svgs/headingprofile.svg";
import Image from "next/image";

export default function HeadingProfile() {
  return (
    <Box ml={[0, 96]} pl={[0, 12]}>
      <Image src={HeadingProfileImage} />
    </Box>
  );
}
