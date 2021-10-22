import { Box, Center, Heading, Square } from "@chakra-ui/layout";
import HeadingScheduleImage from "../../public/svgs/headingschedule.svg";
import Image from "next/image";

export default function HeadingSchedule() {
  return (
    <Box position="relative">
      <Image src={HeadingScheduleImage} />
    </Box>
  );
}
