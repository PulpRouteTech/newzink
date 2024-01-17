"use client";


import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";
import Link from "next/link";

const images = [
 
'/images/yoga1.jpg',
'/images/yoga2.jpg',
'/images/yoga3.jpg',
  
];

export const SectionOne = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade:true,
  };

  return (
    <div className=" w-full ">
        <div className="relative flex justify-center ">
          <div className=" w-full  ">
            <Slider {...settings}>
              {images.map((image) => (
                <div className="relative h-screen">
                  <Image
                    src={image}
                    alt='image'
                    layout='fill'
                    objectFit='fill'
                    className=" "
                  />
                </div>
              )
              )}
            </Slider>
            
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className=" text-4xl font-semibold m-2">
                    Hi, We Are Resilience.
                </h1>
                <p className=" text-xl m-2">
                    Your Mind And Body Fitness Coach.
                </p>
                <div className="flex items-center justify-center  flex-row space-x-4 my-2 ">
              <Link
                href="/"
                className="rounded-full bg-primary/80 hover:bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out scale-75 md:scale-100"
              >
                ABOUT
              </Link>
              <Link
                href="/"
                className="inline-block rounded-full bg-black/70 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90  scale-75 md:scale-100"
              >
                BOOK APPOINTMENT
              </Link>
            </div>

            </div>
        </div>
      
    </div>
  )
}

