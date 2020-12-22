import React from "react";
import { Button } from "../../common/components";
import { number, func } from "prop-types";
import "./page-header.scss";

function PageHeader({ numberOfPeople, onAddEmployeeBtnClick }) {
  return (
    <div className="page-header">
      <h1 className="title">
        People <span className="sub-title">{numberOfPeople} employees</span>
      </h1>
      <Button
        label="Add employee"
        icon="fa-user"
        size="medium"
        onClick={onAddEmployeeBtnClick}
      />
    </div>
  );
}

PageHeader.propTypes = {
  numberOfPeople: number,
  onAddEmployeeBtnClick: func.isRequired,
};

export default PageHeader;
