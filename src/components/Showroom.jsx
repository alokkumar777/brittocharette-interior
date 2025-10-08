import React from "react";

const Showroom = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 w-full mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-6 leading-tight font-semibold">
            Visit Our <br />
            Showroom
          </h1>
          <p className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel porro
            necessitatibus dolorem in a. Fuga in consequatur ratione
            exercitationem aspernatur voluptatem
          </p>
          <button className="bg-black text-white rounded-full md:rounded-4xl py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition duration-300">
            About Us
          </button>
        </div>
        <div className="w-full md:w-1/2 aspect-square relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blobClip">
                <path
                  d="M41.4,-69.7C54.1,-64.3,65.1,-54.1,74.5,-41.7C83.9,-29.3,91.6,-14.7,92.6,0.6C93.6,15.8,87.8,31.6,77.6,42.5C67.3,53.5,52.6,59.6,38.9,65.6C25.3,71.7,12.6,77.7,-1.3,79.9C-15.2,82.1,-30.4,80.6,-44.4,74.7C-58.5,68.9,-71.3,58.7,-76.8,45.6C-82.2,32.4,-80.3,16.2,-78.6,1C-76.8,-14.1,-75.1,-28.3,-70.4,-42.7C-65.6,-57,-57.7,-71.7,-45.5,-77.2C-33.2,-82.8,-16.6,-79.4,-1.1,-77.4C14.3,-75.5,28.7,-75,41.4,-69.7Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <image
              href="/images/int-s-1.jpg"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#blobClip)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
