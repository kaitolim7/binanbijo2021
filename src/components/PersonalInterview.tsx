import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import Test from "../../public/images/parker.jpeg";
import HeadingInterview from "./HeadingInterview";
import InterviewItem from "./InterviewItem";

export default function PersonalInterview() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Box>
        <Box marginTop={["56px", "0"]} />
        <Box>
          <HeadingInterview />
          <Box marginTop="24px" />
          <Center>
            <SimpleGrid columns={3} spacing={0}>
              <InterviewItem
                num={1}
                title="美男美女SNAPへ参加したきっかけ"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={2}
                title="今、頑張っていることを教えて！"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={3}
                title="大学生のうちにやりたいことは？"
                content="大学生のうちにやりたいことは？"
              />
              <InterviewItem
                num={4}
                title="美容のために気を遣っていることは？"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={5}
                title="自己PRをどうぞ！"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={6}
                title="サイトを見ている人へ向けて一言！"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Center>
          <Image src={Test} />
        </Center>
        <Box marginTop={["56px", "0"]} />
        <Box>
          <HeadingInterview />
          <Box marginTop="24px" />
          <Center>
            <SimpleGrid columns={2} spacing={0}>
              <InterviewItem
                num={1}
                title="美男美女SNAPへ参加したきっかけ"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={2}
                title="今、頑張っていることを教えて！"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={3}
                title="大学生のうちにやりたいことは？"
                content="大学生のうちにやりたいことは？"
              />
              <InterviewItem
                num={4}
                title="美容のために気を遣っていることは？"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={5}
                title="自己PRをどうぞ！"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
              <InterviewItem
                num={6}
                title="サイトを見ている人へ向けて一言！"
                content="誘っていただけたので、貴重な機会と思い参加しました！"
              />
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    );
  }
}
