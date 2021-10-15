import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import ImageGridItem from "./ImageGridItem";

export default function ModelGrid() {
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
