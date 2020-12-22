import React from "react";
import classnames from "classnames";
import { string } from "prop-types";
import "./message-box.scss";

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
  message: string,
  type: string,
};

export default MessageBox;
