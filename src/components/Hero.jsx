import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center text-3xl md:text-8xl font-semibold mt-6 md:mt-8 px-4">
        <div className="text-center">Luxurious Interior</div>
        <div className="flex flex-row md:flex-row justify-center items-center gap-2 md:gap-8 my-4 md:my-6">
          <img
            className="w-24 h-10 md:w-45 md:h-15 rounded-4xl object-cover"
            src="/images/int-h-1.jpg"
            alt="Interior design 1"
          />
          <span className="text-2xl md:text-6xl">And</span>
          <img
            className="w-24 h-10 md:w-45 md:h-15 rounded-4xl object-cover"
            src="/images/int-h-2.jpg"
            alt="Interior design 2"
          />
        </div>
        <div className="text-center">Industrial Design</div>
      </div>
      <div className="relative w-full px-4 md:px-0 md:w-4/5 md:max-w-6xl mx-auto mt-6 md:mt-12">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 md:border-8 px-4 py-2 md:px-6 md:py-3 border-white bg-black text-white rounded-2xl md:rounded-3xl text-sm md:text-base font-semibold z-10 whitespace-nowrap">
          Best of year
        </span>
        <img
          className="w-full rounded-3xl md:rounded-4xl object-cover mb-24"
          src="/images/int-h-main.jpg"
          alt="Main interior design"
        />
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 md:translate-y-2/3 px-4 md:px-0">
          <div className="flex justify-end gap-1 mb-2">
            <img
              className="size-8 md:size-10 rounded-full object-cover border-2 border-white"
              src="/images/p-2.jpg"
              alt=""
            />
            <img
              className="size-8 md:size-10 rounded-full object-cover border-2 border-white"
              src="/images/p-1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-end font-bold text-xs md:text-base">
            <p>Founder And Principal</p>
            <p>Brittocharette</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
