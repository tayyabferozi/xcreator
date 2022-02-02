import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div id="auth">
      <div className="left">{children}</div>
      <div className="right">
        <div className="logo-container">
          <img
            className="logo"
            src="./assets/vectors/bg-auth-logo.svg"
            alt="logo"
          />
        </div>
        {/* <img
          className="circle"
          src="./assets/vectors/bg-auth-center.svg"
          alt="circle"
        />
        <img
          className="white"
          src="./assets/vectors/bg-auth-white.svg"
          alt="circle"
        />
        <img
          className="yellow"
          src="./assets/vectors/bg-auth-yellow.svg"
          alt="circle"
        /> */}
      </div>
    </div>
  );
};

export default AuthLayout;
