import React from "react";
import classnames from "classnames";
import { string, node } from "prop-types";

function CardActions({ className, children }) {
  const cardActionsClassName = classnames("card-actions", {
    [className]: !!className,
  });

  return <div className={cardActionsClassName}>{children}</div>;
}

CardActions.propTypes = {
  className: string,
  children: node,
};

export default CardActions;
