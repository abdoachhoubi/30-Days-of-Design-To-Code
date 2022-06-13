import React from "react";
import { CoverImage, SideBar, BottomNav } from "../../components";

const Cover = ({ data, nextItem, prevItem }) => {
  return (
    <section className="cover">
      <section className="cover__banner">
        <CoverImage data={data} />
        <SideBar />
      </section>
      <BottomNav nextItem={nextItem} prevItem={prevItem} />
    </section>
  );
};

export default Cover;
