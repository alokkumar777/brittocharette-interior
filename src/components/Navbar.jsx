import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="my-3">
      <div className="d-flex justify-content-around">
        <div>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li>About</li>
            <li>Project</li>
          </ul>
        </div>
        <div>
          <div className="brand d-flex align-items-center gap-2">
            <img className="brand-icon" src="/images/logo.svg" alt="logo" />
            <span className="brand-name">Brittocharette</span>
          </div>
        </div>
        <div>
          <button
            className={`contact-us btn btn-dark rounded-pill ${
              open ? "open" : ""
            }`}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        Menu
      </div>
    </nav>
  );
};

export default Navbar;
