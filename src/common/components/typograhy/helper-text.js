import React from "react";
import classnames from "classnames";
import "./text.scss";

function HelperText({ text, className }) {
  const textClassName = classnames("helper-text", { [className]: !!className });
  return <p className={textClassName}>{text}</p>;
}

export default HelperText;
