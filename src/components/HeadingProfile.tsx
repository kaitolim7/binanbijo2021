import { Box } from "@chakra-ui/layout";
import HeadingProfileImage from "../../public/svgs/headingprofile.svg";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function HeadingProfile() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <Box ml={96} pl={12}>
        <Image src={HeadingProfileImage} width={250} height={50} />
      </Box>
    );
  }
  return (
    <Box ml={0} pl={0}>
      <Image src={HeadingProfileImage} />
    </Box>
  );
}
