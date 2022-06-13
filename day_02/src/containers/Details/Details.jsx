import React from "react";
import { NavBar, Banner, Thumbnail, DetailsCard } from "../../components";

const Details = ({ data, item }) => {
  return (
    <section className="details">
      <NavBar />
      <Banner data={data} />
      <section className="details__assets">
        <Thumbnail data={data} />
        <DetailsCard data={data} item={item} />
      </section>
    </section>
  );
};

export default Details;
