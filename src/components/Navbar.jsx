import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center m-4 md:justify-around">
      <div className="hidden md:flex">
        <ul className="flex gap-4">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Project</li>
          <li className="cursor-pointer">Career</li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" className="w-8 h-8 rounded-full" />
        <span className="font-semibold text-lg">Brittocharette</span>
      </div>
      <div className="hidden md:block">
        <button className="rounded-full border-2 border-black py-2 px-6 hover:bg-black hover:text-white transition duration-300">
          Contact Us
        </button>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white shadow-lg z-50 py-6 px-4 rounded-lg mx-4">
          <ul className="flex flex-col items-center gap-4 mb-4">
            <li className="cursor-pointer text-sm">About</li>
            <li className="cursor-pointer text-sm">Project</li>
            <li className="cursor-pointer text-sm">Career</li>
          </ul>
          <div className="flex justify-center">
            <button className="rounded-full border-2 text-sm border-black py-2 px-6 hover:bg-black hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
