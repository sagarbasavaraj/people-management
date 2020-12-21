import React from "react";
import classnames from "classnames";

function CardActions({ className, children }) {
  const cardActionsClassName = classnames("card-actions", {
    [className]: !!className,
  });

  return <div className={cardActionsClassName}>{children}</div>;
}

export default CardActions;
