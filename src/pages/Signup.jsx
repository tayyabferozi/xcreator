import React from "react";
import { Link } from "react-router-dom";
import DownloadButtons from "../components/DownloadButtons";
import LabelOption from "../components/LabelOption";
import Input from "../components/Input";
import AuthLayout from "../layouts/AuthLayout";
import Button from "../components/Button";

const Signup = () => {
  return (
    <AuthLayout>
      <h1>Sign Up</h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
      </p>

      <DownloadButtons />

      <LabelOption />

      <Input
        icon={"./assets/vectors/input-email-icon.svg"}
        placeholder="Name"
      />
      <Input
        icon={"./assets/vectors/input-email-icon.svg"}
        placeholder="Full name"
      />
      <Input
        icon={"./assets/vectors/input-pwd-icon.svg"}
        placeholder="Password"
      />
      <Input
        icon={"./assets/vectors/input-pwd-icon.svg"}
        placeholder="Repeat Password"
      />

      <div className="bottom">
        <Button primary label="Create Account" />

        <p className="toggler">
          Do you have an account?{" "}
          <span className="text-yellow">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
