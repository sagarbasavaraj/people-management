import React from "react";
import classnames from "classnames";
import Button from "../button/button";
import "./button-group.scss";

function ButtonGroup({ children, className }) {
  const btnGrpContainerClassName = classnames("btn-grp-container", {
    [className]: !!className,
  });
  return (
    <div className={btnGrpContainerClassName}>
      {React.Children.map(children, (child) => (
        <Button key={child.label} {...child.props} />
      ))}
    </div>
  );
}

export default ButtonGroup;
