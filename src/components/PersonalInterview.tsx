import { Box, Center, SimpleGrid } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Image from "next/image";
import HeadingInterview from "./HeadingInterview";
import { ImageProps } from "./ImageSliderItem";
import InterviewItem from "./InterviewItem";

type Props = {
  whyEntry: string;
  working: string;
  want: string;
  beauty: string;
  selfIntro: string;
  aWord: string;
  image: ImageProps;
};

export default function PersonalInterview(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  if (isXl) {
    return (
      <Box>
        <Box marginTop={["56px", "0"]} />
        <Box>
          <HeadingInterview />
          <Box marginTop="24px" />
          <Center>
            <SimpleGrid columns={3} spacing={5}>
              <InterviewItem
                num={1}
                title="美男美女SNAPへ参加したきっかけ"
                content={props.whyEntry}
              />
              <InterviewItem
                num={2}
                title="今、頑張っていることを教えて！"
                content={props.working}
              />
              <InterviewItem
                num={3}
                title="大学生のうちにやりたいことは？"
                content={props.want}
              />
              <InterviewItem
                num={4}
                title="美容のために気を遣っていることは？"
                content={props.beauty}
              />
              <InterviewItem
                num={5}
                title="自己PRをどうぞ！"
                content={props.selfIntro}
              />
              <InterviewItem
                num={6}
                title="サイトを見ている人へ向けて一言！"
                content={props.aWord}
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
          <Image
            src={props.image.url}
            width={props.image.width}
            height={props.image.height}
          />
        </Center>
        <Box marginTop={["56px", "0"]} />
        <Box>
          <HeadingInterview />
          <Box marginTop="24px" />
          <Center>
            <SimpleGrid columns={2} spacing={3}>
              <InterviewItem
                num={1}
                title="美男美女SNAPへ参加したきっかけ"
                content={props.whyEntry}
              />
              <InterviewItem
                num={2}
                title="今、頑張っていることを教えて！"
                content={props.working}
              />
              <InterviewItem
                num={3}
                title="大学生のうちにやりたいことは？"
                content={props.want}
              />
              <InterviewItem
                num={4}
                title="美容のために気を遣っていることは？"
                content={props.beauty}
              />
              <InterviewItem
                num={5}
                title="自己PRをどうぞ！"
                content={props.selfIntro}
              />
              <InterviewItem
                num={6}
                title="サイトを見ている人へ向けて一言！"
                content={props.aWord}
              />
            </SimpleGrid>
          </Center>
        </Box>
      </Box>
    );
  }
}
