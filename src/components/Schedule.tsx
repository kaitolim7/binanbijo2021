import { Box } from "@chakra-ui/layout";
import ScheduleImage from "../../public/images/schedule.png";
import Image from "next/image";

export default function Schedule() {
  return (
    <Box>
      <Image src={ScheduleImage} width={375} height={300} />
    </Box>
  );
}
