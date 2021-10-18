import { Center } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Test from "../../public/images/parker.jpeg";
export default function PersonalImageSlider() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const images = [
    {
      url: Test.src,
    },
    {
      url: Test.src,
    },
    {
      url: Test.src,
    },
    {
      url: Test.src,
    },
  ];
  if (isXl) {
    return (
      <Center>
        <SimpleImageSlider
          width={540}
          height={400}
          images={images}
          showNavs={true}
          showBullets={true}
        />
      </Center>
    );
  } else {
    return (
      <SimpleImageSlider
        width="100%"
        height="250px"
        images={images}
        showNavs={true}
        showBullets={true}
      />
    );
  }
}
