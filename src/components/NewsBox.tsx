import { Box, Center, Text } from "@chakra-ui/layout";
import { useState } from "react";
import NewsBoxOutline from "./NewsBoxOutline";
import NewsLine from "./NewsLine";

export default function NewsBox() {
  const [news, setNews] = useState(["a", "a", "a", "a", "a", "a", "a", "a"]);
  const [publicNews, setPublicNews] = useState(["a", "a", "a"]);
  const [open, setOpen] = useState(false);

  const viewBox: string = "0 0 345 " + (publicNews.length * 100).toString();
  const height: string = (publicNews.length * 88).toString();

  const handleOpen = () => {
    setOpen(true);
    setPublicNews(news);
  };

  const handleClose = () => {
    setOpen(false);
    setPublicNews(news.slice(0, 3));
  };

  return (
    <Box w={["90%", "70%"]} position="relative" margin="auto">
      <NewsBoxOutline viewBox={viewBox} height={height} />
      <Box
        w={["95%", "80%"]}
        h={["250px"]}
        top="20"
        left="2"
        position="absolute"
      >
        <Center>
          <Box w={["90%", "70%"]}>
            <Text fontWeight="bold" fontSize="sm">
              New!!
            </Text>
            {open && publicNews.length > 0
              ? publicNews.map((index) => <NewsLine height={14} />)
              : publicNews.map((index) => <NewsLine height={12} />)}
            <Box marginTop="8px" />
            {open ? (
              <Text fontWeight="bold" fontSize="sm" onClick={handleClose}>
                とじる
              </Text>
            ) : (
              <Text fontWeight="bold" fontSize="sm" onClick={handleOpen}>
                もっと見る
              </Text>
            )}
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
