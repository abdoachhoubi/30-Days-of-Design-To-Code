import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="desktop__nav">
        <h2 className="desktop__nav__logo">MARQETA</h2>
        <ul className="desktop__nav__list">
          <li>Platforms</li>
          <li>Solutions</li>
          <li>About us</li>
          <li>Clients</li>
        </ul>
        <button className="desktop__nav__cta">Get Started</button>
      </nav>
      <div className="mobile__nav">
        <nav>
          <h2 className="desktop__nav__logo">MARQETA</h2>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
