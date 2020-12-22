import React from "react";
import { string, node } from "prop-types";
import classnames from "classnames";

function CardContent({ className, children }) {
  const cardContentClassName = classnames("card-content", {
    [className]: !!className,
  });

  return <div className={cardContentClassName}>{children}</div>;
}

CardContent.propTypes = {
  className: string,
  children: node,
};

export default CardContent;
