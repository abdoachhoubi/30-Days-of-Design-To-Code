import React from "react";
import { Menu } from "react-feather";

const NavBar = () => {
  return (
    <nav>
      <h2 className="logo">Lopez Rivera</h2>
      <div className="cta">
        <p>Menu</p>
        <Menu color="#1A1A1A" size={30} />
      </div>
    </nav>
  );
};

export default NavBar;
