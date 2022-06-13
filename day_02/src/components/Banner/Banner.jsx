import React from "react";

const Banner = ({ data }) => {
  return (
    <section className="banner">
      <aside className="banner__attr">
        <a
          className="banner__attr__txt"
          href="https://lopez-rivera.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Emiliano Lopez Monica Rivera</h2>
        </a>
      </aside>
      <section className="banner__section">
        <p className="banner__serial">- {data.key}</p>
        <h1 className="banner__heading">{data.title}</h1>
        <div className="banner__cr">
          <p className="banner__cr__attr">
            <a
              href="https://dribbble.com/jurajmasar"
              target="_blank"
              rel="noreferrer"
            >
              DESIGNED BY MASAR
            </a>
          </p>
          <p className="banner__cr__attr">
            <a
              href="https://github.com/abdoachhoubi"
              target="_blank"
              rel="noreferrer"
            >
              DEVELOPED BY ACHHOUBI
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Banner;
