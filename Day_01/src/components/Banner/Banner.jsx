/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ListItem } from "../";
import features from "../../assets/features.json";
import greencard from "../../assets/images/greencard.png";
import transparentcard from "../../assets/images/transparentcard.png";
import violetcard from "../../assets/images/violetcard.png";

const variants = {
  in: { scale: 1.2 },
  out: { scale: 1 },
  hide: { opacity: 0 },
};

const hoverStyle = {
  zIndex: "100",
};

const leaveStyle = {};

const Banner = () => {
  const [item, setItem] = useState("none");

  const animate = (current) => {
    return item === current ? "in" : item === "none" ? "out" : "hide";
  };
  const reStyle = (current) => {
    return item === current ? hoverStyle : leaveStyle;
  };
  return (
    <section className="banner">
      <h1 className="banner__heading">What makes Marqeta different?</h1>
      <p className="banner__subheading">
        The Marqeta platform lets you develop and launch innovative, global and
        trusted payments solutions at an unprecedented speed.
      </p>
      <div className="banner__features">
        <div className="banner__image">
          <motion.img
            style={reStyle("Simple")}
            variants={variants}
            animate={animate("Simple")}
            src={greencard}
            alt=""
            className="img__card violet__card"
          />
          <motion.img
            style={reStyle("Scalable")}
            variants={variants}
            animate={animate("Scalable")}
            src={transparentcard}
            alt=""
            className="img__card transparent__card"
          />
          <motion.img
            style={reStyle("Tursted")}
            variants={variants}
            animate={animate("Tursted")}
            src={violetcard}
            alt=""
            className="img__card green__card"
          />
        </div>
        <div className="banner__features__list">
          {features.map(({ key, title, description }) => (
            <ListItem
              key={key}
              title={title}
              description={description}
              setItem={setItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
