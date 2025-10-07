import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center text-8xl font-semibold mt-8">
        <div>Luxurious Interior</div>
        <div className="flex justify-center items-center gap-8">
          <img
            className="w-45 h-15 rounded-4xl"
            src="/images/int-h-1.jpg"
            alt=""
          />
          <span>And</span>
          <img
            className="w-45 h-15 rounded-4xl"
            src="/images/int-h-2.jpg"
            alt=""
          />
        </div>
        <div>Industrial Design</div>
      </div>
      <div className="flex m-auto relative w-280">
        <span className="absolute top-11 left-120 border-16 p-3 border-white bg-black text-white rounded-4xl">
          Best of year
        </span>
        <img
          className="w-auto mt-20 rounded-4xl"
          src="/images/int-h-main.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
