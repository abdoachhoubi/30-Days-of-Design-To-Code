import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "react-feather";
import { Drawer } from "../";

const NavBar = () => {
  const [position, setPosition] = useState(true);

  const switchPosition = () => {
    setPosition((prev) => !prev);
  };

  return (
    <>
      <nav className="desktop__nav">
        <h2 className="desktop__nav__logo">MARQETA</h2>
        <ul className="desktop__nav__list">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Platforms
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Solutions
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            About us
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Clients
          </motion.li>
        </ul>
        <motion.button
          className="desktop__nav__cta"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </nav>
      <div className="mobile__nav">
        <nav>
          <h2 className="desktop__nav__logo">MARQETA</h2>
          <div className="menu__icon" onClick={switchPosition}>
            <Menu color="#58007A" size={30} />
          </div>
        </nav>
        <Drawer position={position} switchPosition={switchPosition} />
      </div>
    </>
  );
};

export default NavBar;
