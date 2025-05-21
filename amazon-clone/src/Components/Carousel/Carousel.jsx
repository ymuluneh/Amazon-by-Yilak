import React from "react";
import { Carousel  } from "react-responsive-carousel";
import { img } from "./data";
import classes from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgItem, index) => (
          <div key={index}>
            <img src={imgItem} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      {/* <div className={classes.carouselImg}></div> */}
    </div>
  );
}

export default CarouselComponent;
