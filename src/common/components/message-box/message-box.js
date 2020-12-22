import React from "react";
import classnames from "classnames";
import { oneOf, string } from "prop-types";
import "./message-box.scss";

/**
 * MessageBox component - Component to show info (can be error or success feedback) to user
 *
 * Usage:
 * <MessageBox message="Data update success" type="success" />
 * <MessageBox message="Error in loading data" type="error" />
 */
function MessageBox({ message, type }) {
  const messageBoxClassName = classnames("message-box__container", {
    [type]: !!type,
  });
  return (
    <div className={messageBoxClassName}>
      <p>{message}</p>
    </div>
  );
}

MessageBox.propTypes = {
  /** Message to be displayed */
  message: string,
  /** type can error or success */
  type: oneOf(["success", "error"])
};

export default MessageBox;
