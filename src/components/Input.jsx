import React from "react";
import clsx from "clsx";
const Input = ({ id, select, options, label, type, icon, alt, ...rest }) => {
  return (
    <>
      {label && (
        <label className="d-block mb-3" htmlFor={id}>
          <h6 className="small">{label}</h6>
        </label>
      )}
      <div className="custom-form-control">
        {select ? (
          <>
            <img
              className="select-arrow"
              src="./assets/vectors/select-right-icon.svg"
              alt="arrow"
            />
            <select {...rest}>
              {options.map((el, idx) => {
                const { text } = el;

                return <option key={"opt" + idx}>{text}</option>;
              })}
            </select>
          </>
        ) : (
          <>
            {icon && <img className="icon" src={icon} alt={alt} />}
            <input
              className={clsx([{ "no-icon": !icon }])}
              type={type ? type : "text"}
              {...rest}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Input;
