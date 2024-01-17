"use client";


import React from "react";
import Image from 'next/image';
import Link from "next/link";


export const SectionOne = () => {
 

  return (
    <section className=" w-full my-2">
      <div className=" flex justify-center items-center mx-2 lg:mx-10">
        <div className="relative w-full  lg:w-2/3">
          <Link
          href="/feature"
          >
          <div className=" relative h-[500px]">
                <Image
                    src='/images/pic1.avif'
                    alt='image'
                    layout='fill'
                    objectFit='fill'
                    className=" border-black border"
                    
                />
            </div>
          </Link>
        
            <div className=" absolute bottom-0 left-0 right-0  flex flex-col items-start justify-center px-10 ">
                        <h1 className=" text-2xl md:text-3xl text-white">मुनव्वर राणा  ने कहा-मैं खराब आदमी, खराब शेर और खराब खाना बर्दाश्त नहीं कर पाता हूं।</h1>
                        <p className="hidden md:block text-white">ऐसे उडूं कि जाल न आए खुदा करे <br></br>
रस्ते में अस्पताल न आए खुदा करे... </p>
                        <Link
                            href="/feature"
                            className=" bg-primary/80 hover:bg-primary my-4 px-4 py-2 text-base font-semibold text-red-800 duration-300 ease-in-out scale-100"
                        >
                            READ MORE
                        </Link>
                    </div>
        </div>
        <div className=" w-1/3 hidden lg:block"></div>

      </div>
    </section>
  )
}
  

