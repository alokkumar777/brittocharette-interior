import * as React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showroom from "./components/Showroom";
import DividerText from "./components/DividerText";

const App = () => {
  return (
    <>
      <div className="mb-[12rem]">
        <Navbar />
        <Hero />
        <Showroom />
        <DividerText />
      </div>
    </>
  );
};

export default App;
