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
      <SimpleGrid columns={3} spacing={3}>
        {props.isGirls
          ? girls.length > 0 &&
            girls.map((girl: any) => (
              <ImageGridItem
                key={girl.id}
                id={girl.id}
                entryNumber={girl.entryNumber}
                name={girl.name}
                topImage={girl.topImage}
                returnStage={girl.returnStage}
                finalStage={girl.finalStage}
              />
            ))
          : boys.length > 0 &&
            boys.map((boy: any) => (
              <ImageGridItem
                key={boy.id}
                id={boy.id}
                entryNumber={boy.entryNumber}
                name={boy.name}
                topImage={boy.topImage}
                returnStage={boy.returnStage}
                finalStage={boy.finalStage}
              />
            ))}
      </SimpleGrid>
    );
  } else {
    return (
      <SimpleGrid columns={2} spacing={1}>
        {props.isGirls
          ? girls.length > 0 &&
            girls.map((girl: any) => (
              <ImageGridItem
                key={girl.id}
                id={girl.id}
                entryNumber={girl.entryNumber}
                name={girl.name}
                topImage={girl.topImage}
                returnStage={girl.returnStage}
                finalStage={girl.finalStage}
              />
            ))
          : boys.length > 0 &&
            boys.map((boy: any) => (
              <ImageGridItem
                key={boy.id}
                id={boy.id}
                entryNumber={boy.entryNumber}
                name={boy.name}
                topImage={boy.topImage}
                returnStage={boy.returnStage}
                finalStage={boy.finalStage}
              />
            ))}
      </SimpleGrid>
    );
  }
}
