import React from "react";
import { Play } from "react-feather";

const Thumbnail = ({ data }) => {
  const style = {
    backgroundImage: `url(${data.video_cover})`,
  };
  return (
    <div className="thumbnail" style={style}>
      <div className="thumbnail__mask">
        <div className="icon__play">
          <Play size={30} color="#FFFFFF" />
        </div>
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <div className="circle4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
