import React from "react";
import { Link } from "react-router-dom";
import DownloadButtons from "../components/DownloadButtons";
import LabelOption from "../components/LabelOption";
import Input from "../components/Input";
import AuthLayout from "../layouts/AuthLayout";
import Button from "../components/Button";

const Login = () => {
  return (
    <AuthLayout>
      <h1>Login</h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
      </p>

      <DownloadButtons />

      <LabelOption />

      <Input
        icon={"./assets/vectors/input-email-icon.svg"}
        placeholder="Email ID"
      />
      <Input
        icon={"./assets/vectors/input-pwd-icon.svg"}
        placeholder="Password"
      />

      <p>
        <a href="#0">I forgot my password</a>
      </p>

      <div className="bottom">
        <Button primary label="Create Account" />

        <p className="toggler">
          Do you have an account?
          <span className="text-yellow">
            <Link to="/">Sign up</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
