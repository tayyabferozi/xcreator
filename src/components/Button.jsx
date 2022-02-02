import React from "react";
import clsx from "clsx";

const Button = ({
  label,
  download,
  primary,
  rootClassName,
  className,
  children,
}) => {
  return (
    <div className={clsx("btn-container", { [rootClassName]: rootClassName })}>
      <button
        className={clsx(
          "btn w-100",
          { "btn-download": download },
          { primary: primary },

          className
        )}
      >
        {label || children}
      </button>
      {primary && (
        <img className="bg" src="./assets/vectors/bg-primary-btn.svg" />
      )}
    </div>
  );
};

export default Button;
