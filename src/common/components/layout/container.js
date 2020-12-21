import React from "react";
import classnames from "classnames";

function Container({ children, className }) {
  const containerClassName = classnames("container", {
    [className]: !!className,
  });

  return <div className={containerClassName}>{children}</div>;
}

export default Container;
