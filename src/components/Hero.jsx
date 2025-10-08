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
          className="w-full rounded-3xl md:rounded-4xl object-cover mb-12"
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
      {/* sub-section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto px-4 gap-6 md:gap-0 mb-[12rem]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-8 w-full md:w-auto">
          <img
            className="w-full md:w-[12rem] h-48 md:h-[14rem] object-cover object-center md:object-left rounded-3xl md:rounded-4xl"
            src="/images/int-h-3.jpg"
            alt=""
          />
          <div className="flex gap-4 md:gap-x-8 items-end">
            <div className="border-r-2 border-gray-300 pr-4 md:pr-8 h-full flex flex-col justify-end">
              <h1 className="text-4xl md:text-5xl font-semibold">
                The <br />
                6K+
              </h1>
              <p className="text-sm md:text-base mt-1 font-medium">
                Speciallzing <br />
                in Luxury
              </p>
            </div>
            <div className="border-r-2 border-gray-300 pr-4 md:pr-8 h-full flex flex-col justify-end">
              <h1 className="text-4xl md:text-5xl font-semibold">14</h1>
              <p className="text-sm md:text-base mt-1 font-medium">
                Progress <br />
                Work
              </p>
            </div>
            <div className="pr-4 md:pr-0 h-full flex flex-col justify-end">
              <h1 className="text-4xl md:text-5xl font-semibold">9</h1>
              <p className="text-sm md:text-base mt-1 font-medium">
                Total <br />
                Work
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end w-full md:w-auto gap-3 md:self-end">
          <p className="text-sm md:text-base max-w-xs text-left md:text-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border border-black transition duration-300 self-end">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
