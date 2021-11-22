import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { useState } from "react";
import NewsBoxOutline from "./NewsBoxOutline";
import NewsLine from "./NewsLine";

export default function NewsBox() {
  const [news, setNews] = useState(["a", "a", "a", "a", "a", "a", "a", "a"]);
  const [publicNews, setPublicNews] = useState(["a", "a", "a"]);
  const [open, setOpen] = useState(false);

  const viewBox: string = "0 0 345 " + (publicNews.length * 100).toString();
  const viewBoxXl: string =
    "0 0 827.261 " + (publicNews.length * 100).toString();
  const height: string = (publicNews.length * 88).toString();
  const heightXl: string = (publicNews.length * 77).toString();

  const handleOpen = () => {
    setOpen(true);
    setPublicNews(news);
  };

  const handleClose = () => {
    setOpen(false);
    setPublicNews(news.slice(0, 3));
  };

  return (
    <Box w={["90%", "56%"]} position="relative" margin="auto">
      <NewsBoxOutline
        viewBox={viewBox}
        viewBoxXl={viewBoxXl}
        height={height}
        heightXl={heightXl}
      />
      <Box
        w={["95%", "75%"]}
        h={["250px"]}
        top={["14", "20"]}
        left={["2", "32"]}
        position="absolute"
      >
        <Center>
          <Box w={["90%", "70%"]}>
            {open && publicNews.length > 0
              ? publicNews.map((index) => <NewsLine height={14} key={index} />)
              : publicNews.map((index) => <NewsLine height={12} key={index} />)}
            <Flex h="100%" alignItems="end" justify="end">
              {open ? (
                <Text
                  fontWeight="bold"
                  fontSize={["sm", "md"]}
                  onClick={handleClose}
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  とじる
                </Text>
              ) : (
                <Text
                  fontWeight="bold"
                  fontSize={["sm", "md"]}
                  onClick={handleOpen}
                  _hover={{
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  もっと見る
                </Text>
              )}
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
