import React from "react";

const BottomNav = ({ prevItem, nextItem }) => {
  return (
    <section className="bottom__nav">
      <div className="item">
        <div className="line"></div>
        <p onClick={prevItem} className="previous">
          PREVIOUS PROJECT
        </p>
      </div>
      <div className="item">
        <p onClick={nextItem} className="next">
          NEXT PROJECT
        </p>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default BottomNav;
