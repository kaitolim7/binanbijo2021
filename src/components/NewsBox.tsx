import { Box, Center, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import NewsBoxOutline from "../../public/svgs/news_box.svg";
import NewsLine from "./NewsLine";

export default function NewsBox() {
  const news = ["a", "a", "a", "a", "a", "a", "a", "a"];
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box w={["90%", "70%"]} position="relative" margin="auto">
      <Image src={NewsBoxOutline} />
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
            {open && news.length > 0
              ? news.map((value, index) => <NewsLine />)
              : news.slice(0, 3).map((value, index) => <NewsLine />)}
            <Box marginTop="8px" />
            {open ? (
              <Text fontWeight="bold" fontSize="sm" onClick={handleClick}>
                とじる
              </Text>
            ) : (
              <Text fontWeight="bold" fontSize="sm" onClick={handleClick}>
                もっと見る
              </Text>
            )}
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
