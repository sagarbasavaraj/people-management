import React from "react";
import classnames from "classnames";
import { string } from "prop-types";
import "./text.scss";

function HelperText({ text, className }) {
  const textClassName = classnames("helper-text", { [className]: !!className });
  return <p className={textClassName}>{text}</p>;
}

HelperText.propTypes = {
  text: string,
  className: string,
};

export default HelperText;
