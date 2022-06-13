import React from "react";
import { motion } from "framer-motion";
import { X } from "react-feather";

const variants = {
  in: {
    x: "100vw",
    alpha: 0,
  },
  out: {
    x: "0vw",
    alpha: 1,
  },
};

const Drawer = ({ position, switchPosition }) => {
  return (
    <motion.section
      className="mobile__drawer"
      animate={position ? "in" : "out"}
      variants={variants}
    >
      <motion.div
        whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}
        className="close__icon"
        onClick={switchPosition}
      >
        <X color="rgb(0,0,0)" size={36} />
      </motion.div>
      <ul className="mobile__nav__list">
        <motion.li whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}>
          Platforms
        </motion.li>
        <motion.li whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}>
          Solutions
        </motion.li>
        <motion.li whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}>
          About us
        </motion.li>
        <motion.li whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}>
          Clients
        </motion.li>
      </ul>
      <motion.button
        className="mobile__nav__cta"
        whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default Drawer;
