import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav id="navbar">
        <img className="logo" src="./assets/vectors/logo.svg" alt="logo" />

        <div className="search-input-container">
          <img src="./assets/vectors/input-search-icon.svg" alt="search" />
          <input type="search" name="" id="" placeholder="Search .." />
        </div>

        <div className="nav">
          <Link>
            <img src="./assets/vectors/nav-icon-home.svg" alt="home" />
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
