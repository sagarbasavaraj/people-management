import React from "react";
import classnames from "classnames";
import { string, func, bool, oneOf } from "prop-types";
import "./button.scss";

/**
 * Button component.
 *
 * Usage:
 * <Button onClick={() => null} label="Test" />
 * <Button onClick={() => null} label="Test" icon="far fa-user" />
 */
function Button({
  label,
  onClick,
  rounded = true,
  type = "button",
  outline = false,
  fluid = false,
  icon,
  size = "normal",
  disabled,
}) {
  const btnClassNames = classnames("btn", {
    "btn-outline": outline,
    rounded,
    fluid,
    [size]: !!size,
    disabled,
  });
  const iconClassName = classnames("icon far", { [icon]: !!icon });
  return (
    <button
      type={type}
      className={btnClassNames}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <i className={iconClassName}></i>}
      {label}
    </button>
  );
}

Button.propTypes = {
  /** Button label */
  label: string.isRequired,
  /** Gets called when the user clicks on the button */
  onClick: func,
  /** make button border rounded */
  rounded: bool,
  /** type of button default to button. it can be 'submit' */
  type: string,
  /** if true button will be with transparent background */
  outline: bool,
  /** if true button will be full width */
  fluid: bool,
  /** The size of the button */
  size: oneOf(["normal", "medium"]),
  /** icon with button */
  icon: string,
  /** Disabled or not */
  disabled: bool,
};

export default Button;
