import { Box } from "@chakra-ui/layout";
import ScheduleImage from "../../public/images/schedule.png";
import Image from "next/image";
import { useBreakpointValue } from "@chakra-ui/media-query";

export default function Schedule() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  return (
    <Box>
      {isXl ? (
        <Image src={ScheduleImage} width={625} height={500} />
      ) : (
        <Image src={ScheduleImage} width={375} height={300} />
      )}
    </Box>
  );
}
