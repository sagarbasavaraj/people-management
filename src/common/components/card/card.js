import React from "react";
import classnames from "classnames";
import "./card.scss";

function Card({ className, children }) {
  const cardClassName = classnames("card", { [className]: !!className });

  return <div className={cardClassName}>{children}</div>;
}

export default Card;
