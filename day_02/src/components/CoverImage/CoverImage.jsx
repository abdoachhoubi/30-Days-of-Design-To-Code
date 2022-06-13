import React from "react";

const CoverImage = ({ data }) => {
  const style = {
    backgroundImage: `url(${data.image_cover})`,
  };
  return <div className="cover__image" style={style}></div>;
};

export default CoverImage;
