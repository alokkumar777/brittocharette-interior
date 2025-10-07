import React from "react";

const Hero = () => {
  return (
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
  );
};

export default Hero;
