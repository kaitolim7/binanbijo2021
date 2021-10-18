import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import ImageGridItem from "./ImageGridItem";

export default function ModelGrid() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  if (isXl) {
    return (
      <SimpleGrid columns={3} spacing={0}>
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
      </SimpleGrid>
    );
  } else {
    return (
      <SimpleGrid columns={2} spacing={0}>
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
        <ImageGridItem />
      </SimpleGrid>
    );
  }
}
