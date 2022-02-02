import React from "react";

import Button from "../components/Button";

const DownloadButtons = () => {
  return (
    <div className="d-flex justify-content-between align-items-center download-btns">
      <Button download>
        <img src="./assets/vectors/btn-google-icon.svg" alt="google" />
      </Button>
      <Button download>
        <img src="./assets/vectors/btn-apple-icon.svg" alt="apple" />
      </Button>
    </div>
  );
};

export default DownloadButtons;
