import React from "react";
import { motion } from "framer-motion";

const ListItem = ({ title, description, setItem }) => {
  return (
    <motion.div
      className="list__item"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => {
        setItem(title);
      }}
      onMouseLeave={() => {
        setItem("none");
      }}
    >
      <div className="list__circle"></div>
      <div className="list__data">
        <h2 className="list__item__heading">{title}</h2>
        <p className="list__item__txt">{description}</p>
      </div>
    </motion.div>
  );
};

export default ListItem;
