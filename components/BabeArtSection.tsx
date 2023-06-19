import React from "react";
import Image from "next/image";

import babeArtOne from "../public/images/babe-art-1.webp";
import babeArtTwo from "../public/images/babe-art-2.webp";
import babeArtThree from "../public/images/babe-art-3.webp";
import babeArtFour from "../public/images/babe-art-4.webp";
import babeArtFive from "../public/images/babe-art-5.webp";
import babeArtSix from "../public/images/babe-art-6.webp";
import babeArtSeven from "../public/images/babe-art-7.webp";
import babeArtEight from "../public/images/babe-art-8.webp";
import babeArtNine from "../public/images/babe-art-9.webp";
import babeArtTen from "../public/images/babe-art-10.webp";

import Link from "next/link";

import healthQuotes from "../pages/api/quotes/health/health-quotes.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const babeArtsPic = [
  babeArtOne,
  babeArtTwo,
  babeArtThree,
  babeArtFour,
  babeArtFive,
  babeArtSix,
  babeArtSeven,
  babeArtEight,
  babeArtNine,
  babeArtTen,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
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

export default function BabeArtSection() {
  return (
    <div className="-mx-5 mb-20 max-w-7xl">
      <div className="relative">
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderButtonGroupOutside={true}
          rewindWithAnimation={true}
        >
          {babeArtsPic.map((babePic, index) => (
            <div key={index}>
              <div className="col-start-1 col-end-3 flex p-5">
                <Image className="rounded-lg" src={babePic} alt="" priority />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
