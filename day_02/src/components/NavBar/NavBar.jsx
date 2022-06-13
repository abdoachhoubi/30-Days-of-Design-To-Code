import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "react-feather";

const variants = {
  in: { y: "0", opacity: 1 },
  out: { y: "-60vh", opacity: 0 },
};

const NavBar = () => {
  const [slide, setSlide] = useState(false);
  const animate = () => {
    setSlide((prev) => !prev);
  };
  return (
    <nav>
      <a href="/">
        <h2 className="nav__logo">
          LOPEZ RIVERA<sup>TM</sup>
        </h2>
      </a>
      <div className="nav__icon" onClick={animate}>
        <p>MENU</p>
        <Menu color="#000000" size={20} />
      </div>
      <motion.div
        variants={variants}
        animate={slide ? "in" : "out"}
        className="nav__slider"
        onMouseLeave={animate}
      >
        <div className="nav__icon" onClick={animate}>
          <p>CLOSE</p>
          <X color="#FFFFFF" size={20} />
        </div>
        <ul>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            ABOUT
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            PROJECTS
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            NEWS
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            CONTRIBUTORS
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default NavBar;
