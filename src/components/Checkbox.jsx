import React from "react";

const Checkbox = ({ children, checked }) => {
  return (
    <label className="checkbox-container">
      {children}
      <input type="checkbox" checked={checked} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
