import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center m-4">
      <div className="">
        <ul className="flex gap-4">
          <li>About</li>
          <li>Project</li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" alt="" />
        <span className="font-semibold">Brittocharette</span>
      </div>
      <div>
        <button className="rounded-4xl border-2 border-black py-2 px-4 hover:bg-black hover:text-white transition duration-300">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
