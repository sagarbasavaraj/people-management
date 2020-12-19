import React from "react";
import classnames from "classnames";
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
    <button type={type} className={btnClassNames} onClick={onClick}>
      {icon && <i className={iconClassName}></i>}
      {label}
    </button>
  );
}

export default Button;
