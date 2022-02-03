import React from "react";
import clsx from "clsx";
// import { Select, Option } from "./select/index";
import Select from "./select/select";
import Option from "./select/option";

const Input = ({ id, select, options, label, type, icon, alt, ...rest }) => {
  return (
    <>
      {label && (
        <label className="d-block mb-3" htmlFor={id}>
          <h6 className="small">{label}</h6>
        </label>
      )}
      <div className={clsx("custom-form-control", { select: select })}>
        {select ? (
          <>
            <img
              className="select-arrow"
              src="./assets/vectors/select-right-icon.svg"
              alt="arrow"
            />
            <Select {...rest}>
              {options.map((el, idx) => {
                const { text, value } = el;

                return (
                  <Option value={value} key={"opt" + idx}>
                    {text}
                  </Option>
                );
              })}
            </Select>
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
