import React from "react";
import classnames from "classnames";
import { string, node } from "prop-types";

function Container({ children, className }) {
  const containerClassName = classnames("container", {
    [className]: !!className,
  });

  return <div className={containerClassName}>{children}</div>;
}

Container.propTypes = {
  className: string,
  children: node
};

export default Container;
