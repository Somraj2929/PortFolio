"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";

const CarouselBanner = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        className="container mx-auto  hidden md:block"
      >
        <div>
          <img
            src="./images/banners/WebBanner1.webp"
            alt="Banner Image 1 (Web)"
            className="h-full w-full max-w-full object-cover "
          />
        </div>
        <div>
          <img
            src="./images/banners/WebBanner1.webp"
            alt="Banner Image 2 (Web)"
            className="h-full w-full max-w-full object-cover"
          />
        </div>
        <div>
          <img
            src="./images/banners/WebBanner1.webp"
            alt="Banner Image 3 (Web)"
            className="h-full w-full max-w-full object-cover"
          />
        </div>
      </Carousel>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        className="container mx-auto block md:hidden"
      >
        <div>
          <img
            src="./images/banners/MWebBanner1.webp"
            alt="Banner Image 1 (Web)"
            className="h-full w-full max-w-full object-cover"
          />
        </div>
        <div>
          <img
            src="./images/banners/MWebBanner1.webp"
            alt="Banner Image 2 (Web)"
            className="h-full w-full max-w-full object-cover"
          />
        </div>
        <div>
          <img
            src="./images/banners/MWebBanner1.webp"
            alt="Banner Image 3 (Web)"
            className="h-full w-full max-w-full object-cover"
          />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselBanner;
