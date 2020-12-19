import React from "react";
import { Button } from "../../common/components";
import "./page-header.scss";

function PageHeader({ numberOfPeople = 3 }) {
  return (
    <div className="page-header">
      <h1 className="title">
        People <span className="sub-title">{numberOfPeople} employees</span>
      </h1>
      <Button label="Add employee" icon="fa-user" medium />
    </div>
  );
}

export default PageHeader;
