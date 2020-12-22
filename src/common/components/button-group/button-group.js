import React from "react";
import classnames from "classnames";
import { node, string } from "prop-types";
import Button from "../button/button";
import "./button-group.scss";

/**
 * ButtonGroup Component
 * 
 * Usage:
 * <ButtonGroup>
 *   <item label="Cancel" onClick={navigate} outline />
 *   <item type="submit" label={actionBtnLabel} />
 * </ButtonGroup>
 */
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

ButtonGroup.propTypes = {
  /** Items which are rendered as Buttons */
  children: node,
  /** Style of button group container */
  className: string,
};

export default ButtonGroup;
