import React from "react";

const Input = ({ type, icon, alt, ...rest }) => {
  return (
    <div className="custom-form-control">
      {icon && <img className="icon" src={icon} alt={alt} />}
      <input type={type ? type : "text"} {...rest} />
    </div>
  );
};

export default Input;
