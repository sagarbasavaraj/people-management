import React from "react";
import UserInfo from "./user-info";
import "./app-bar.scss";

function AppBar() {
  return (
    <nav className="navbar">
      <div className="container flex align-right">
        <UserInfo />
      </div>
    </nav>
  );
}

export default AppBar;
