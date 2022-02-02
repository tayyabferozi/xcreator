import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav id="navbar">
        <div className="grad"></div>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-4 d-flex align-items-center">
              <img
                className="logo"
                src="./assets/vectors/logo.svg"
                alt="logo"
              />
            </div>
            <div className="col-8 d-flex justify-content-end">
              <div className="search-input-container">
                <img
                  src="./assets/vectors/input-search-icon.svg"
                  alt="search"
                />
                <input type="search" name="" id="" placeholder="Search .." />
              </div>

              <div className="nav">
                <Link to="/">
                  <img src="./assets/vectors/nav-icon-home.svg" alt="home" />
                </Link>
                <Link to="/">
                  <img
                    src="./assets/vectors/nav-icon-maximize.svg"
                    alt="maximize"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="./assets/vectors/nav-icon-triangle.svg"
                    alt="triangle"
                  />
                </Link>
                <Link to="/">
                  <img src="./assets/vectors/nav-icon-sms.svg" alt="sms" />
                </Link>
                <Link to="/">
                  <img src="./assets/img/user.png" alt="user" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex"></div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
