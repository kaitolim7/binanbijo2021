import { useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Test from "../../public/images/parker.jpeg";
export default function PersonalImageSlider() {
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
