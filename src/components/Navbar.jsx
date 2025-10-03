import React from "react";

const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-nav me-auto">
          <ul className="navbar-nav">
            <li className="nav-item">About</li>
            <li className="nav-item ms-3">Projects</li>
          </ul>
        </div>
        <div className="mx-auto d-flex align-items-center">
          <img
            src="../../public/images/logo.svg"
            alt="brand logo"
            className="navbar-brand"
          />
          <span className="fw-bold">Brittocharette</span>
        </div>
        <div className="ms-auto">
          <button className="btn btn-dark rounded-pill">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
