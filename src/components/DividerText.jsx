import React from "react";

const DividerText = () => {
  return (
    <div className="bg-stone-200 w-full h-12 md:h-16 overflow-hidden relative mt-8">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <div className="uppercase flex items-center h-full whitespace-nowrap animate-scroll">
        <span className="text-2xl md:text-4xl font-normal px-8 md:px-12">
          luxurious interior
        </span>
        <span>
          <i class="fa-solid fa-star"></i>
        </span>
        <span className="text-2xl md:text-4xl font-normal px-8 md:px-12">
          miami-based interior design
        </span>
        <span>
          <i class="fa-solid fa-star"></i>
        </span>
        <span className="text-2xl md:text-4xl font-normal px-8 md:px-12">
          luxurious interior
        </span>
        <span>
          <i class="fa-solid fa-star"></i>
        </span>
        <span className="text-2xl md:text-4xl font-normal px-8 md:px-12">
          miami-based interior design
        </span>
        <span>
          <i class="fa-solid fa-star"></i>
        </span>
        <span className="text-2xl md:text-4xl font-normal px-8 md:px-12">
          luxurious interior
        </span>
        <span>
          <i class="fa-solid fa-star"></i>
        </span>
        <span className="text-2xl md:text-4xl font-normal px-8 md:px-12">
          miami-based interior design
        </span>
      </div>
    </div>
  );
};

export default DividerText;
