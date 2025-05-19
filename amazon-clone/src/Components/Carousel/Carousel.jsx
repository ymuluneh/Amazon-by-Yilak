import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { img } from "./data";
import css from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <div>
      <ResponsiveCarousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={true}
      >
        {img.map((imgItem, index) => (
          <div key={index}>
            <img src={imgItem} alt={`Slide ${index}`} />
          </div>
        ))}
      </ResponsiveCarousel>
      <div className="carouselImg"></div>
    </div>
  );
}

export default CarouselComponent;
