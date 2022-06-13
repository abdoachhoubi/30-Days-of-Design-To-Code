import React from "react";
import { NavBar, Banner, Thumbnail, DetailsCard } from "../../components";

const Details = ({ data, nextItem, prevItem }) => {
  return (
    <section className="details">
      <NavBar />
      <Banner data={data} />
      <section className="details__assets">
        <Thumbnail />
        <DetailsCard />
      </section>
    </section>
  );
};

export default Details;
