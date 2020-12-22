import React from "react";

function UserInfo() {
  return (
    <div className="user-info__wrapper">
      <div className="avatar"></div>
      <label className="user-info">
        <span>Julie Howard</span>
        <span className="user-role">Admin</span>
      </label>
    </div>
  );
}
export default UserInfo;
