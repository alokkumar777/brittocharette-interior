import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showroom from "./components/Showroom";

const App = () => {
  return (
    <>
      <div className="mb-[12rem]">
        <Navbar />
        <Hero />
        <Showroom />
      </div>
    </>
  );
};

export default App;
