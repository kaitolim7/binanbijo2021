import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useEffect, useState } from "react";
import shuffle from "../hooks/shuffle";
import ImageGridItem from "./ImageGridItem";

type Props = {
  girls: any[];
  boys: any[];
  isGirls: boolean;
};

export default function ModelGrid(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });

  const [girls, setGirls] = useState(props.girls);
  const [boys, setBoys] = useState(props.boys);

  useEffect(() => {
    setGirls(shuffle(props.girls));
    setBoys(shuffle(props.boys));
  }, []);

  if (isXl) {
    return (
      <SimpleGrid columns={3} spacing={0}>
        {props.isGirls
          ? girls.length > 0 &&
            girls.map((content: any) => (
              <ImageGridItem
                key={content.id}
                id={content.id}
                entryNumber={content.entryNumber}
                name={content.name}
              />
            ))
          : boys.length > 0 &&
            boys.map((content: any) => (
              <ImageGridItem
                key={content.id}
                id={content.id}
                entryNumber={content.entryNumber}
                name={content.name}
              />
            ))}
      </SimpleGrid>
    );
  } else {
    return (
      <SimpleGrid columns={2} spacing={0}>
        {props.isGirls
          ? girls.length > 0 &&
            girls.map((content: any) => (
              <ImageGridItem
                key={content.id}
                id={content.id}
                entryNumber={content.entryNumber}
                name={content.name}
              />
            ))
          : boys.length > 0 &&
            boys.map((content: any) => (
              <ImageGridItem
                key={content.id}
                id={content.id}
                entryNumber={content.entryNumber}
                name={content.name}
              />
            ))}
      </SimpleGrid>
    );
  }
}
