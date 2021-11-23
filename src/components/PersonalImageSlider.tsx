import { Center, Flex, Spacer } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageSliderItem from "./ImageSliderItem";
import PersonalRightIcon from "./PersonalRightIcon";
import PersonalLeftIcon from "./PersonalLeftIcon";
export default function PersonalImageSlider() {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  if (isXl) {
    return (
      <Flex mx={20}>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<PersonalRightIcon />}
          customLeftArrow={<PersonalLeftIcon />}
          focusOnSelect={true}
        >
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
        </Carousel>
      </Flex>
    );
  } else {
    const CustomRightArrow = ({ onClick, ...rest }: any) => {
      const {
        onMove,
        carouselState: { currentSlide, deviceType },
      } = rest;
      // onMove means if dragging or swiping in progress.
      return <button onClick={() => onClick()} />;
    };
    return (
      <Flex>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<PersonalRightIcon />}
          customLeftArrow={<PersonalLeftIcon />}
          focusOnSelect={true}
        >
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
          <ImageSliderItem />
        </Carousel>
      </Flex>
    );
  }
}
