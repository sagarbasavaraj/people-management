import React from "react";
import classnames from "classnames";

function CardContent({ className, children }) {
  const cardContentClassName = classnames("card-content", {
    [className]: !!className,
  });

  return <div className={cardContentClassName}>{children}</div>;
}

export default CardContent;
