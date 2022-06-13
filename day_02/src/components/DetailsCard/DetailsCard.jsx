import React from "react";

const DetailsCard = ({ data, item }) => {
  const details = data.details;
  return (
    <section className="details__card">
      <h2 className="details__index">0{item + 1}</h2>
      <ul className="details__list">
        {details.map((item) => (
          <li className="details__item" key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DetailsCard;
