import React from "react";
import classnames from "classnames";
import { string, func, bool } from "prop-types";
import "./button.scss";

function Button({
  label,
  onClick,
  rounded = true,
  type = "button",
  outline = false,
  fluid = false,
  icon,
  medium = false,
}) {
  const btnClassNames = classnames("btn", {
    "btn-outline": outline,
    rounded,
    fluid,
    medium,
  });
  const iconClassName = classnames("icon far", { [icon]: !!icon });
  return (
    <button
      type={type}
      className={btnClassNames}
      onClick={onClick}
    >
      {icon && <i className={iconClassName}></i>}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onClick: func,
  rounded: bool,
  type: string,
  outline: bool,
  fluid: bool,
  medium: bool,
  icon: string,
};

export default Button;
