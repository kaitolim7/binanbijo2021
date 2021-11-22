import { Box } from "@chakra-ui/layout";
import ScheduleImage from "../../public/svgs/schedule.svg";
import Image from "next/image";

export default function Schedule() {
  return (
    <Box>
      <Image src={ScheduleImage} />
    </Box>
  );
}
