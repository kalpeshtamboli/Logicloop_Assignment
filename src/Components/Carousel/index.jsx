import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CarouselCompo = ({
  children, 
  autoPlay,
  autoPlaySpeed,
  swipeable,
  arrows,
  showDots,
  infinite,
  responsive,
}) => {
  return (
    <Carousel
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      swipeable={swipeable}
      responsive={responsive}
      arrows={arrows}
      showDots={showDots}
      infinite={infinite}
    >
      {children}
    </Carousel>
  );
};

export default CarouselCompo;
