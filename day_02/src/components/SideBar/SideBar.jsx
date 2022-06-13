import React from "react";
import { Search } from "react-feather";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="search">
        <Search size={22} color="#FFFFFF" />
      </div>
      <div className="social">
        <a
          href="https://linkedin.com/in/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          LINKEDIN
        </a>
        <a
          href="https://twitter.com/@abdo_achhoubi"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          TWITTER
        </a>
        <a
          href="https://github.com/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          GITHUB
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
