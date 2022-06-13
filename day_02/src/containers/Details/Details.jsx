import React from "react";
import { NavBar, Banner, Thumbnail, DetailsCard } from "../../components";

const Details = () => {
  return (
    <section className="details">
      <NavBar />
      <Banner />
      <section className="details__assets">
        <Thumbnail />
        <DetailsCard />
      </section>
    </section>
  );
};

export default Details;
