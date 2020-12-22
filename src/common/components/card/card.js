import React from "react";
import classnames from "classnames";
import { string, node } from "prop-types";
import "./card.scss";

function Card({ className, children }) {
  const cardClassName = classnames("card", { [className]: !!className });

  return <div className={cardClassName}>{children}</div>;
}

Card.propTypes = {
  className: string,
  children: node,
};

export default Card;
