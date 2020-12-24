import React from "react";
import classnames from "classnames";
import { string } from "prop-types";
import "./text.scss";

function Text({ text, className }) {
  const textClassName = classnames("text", { [className]: !!className });
  return <p className={textClassName}>{text}</p>;
}

Text.propTypes = {
  text: string,
  className: string,
};

export default Text;
