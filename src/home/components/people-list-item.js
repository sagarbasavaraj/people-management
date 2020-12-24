import React from "react";
import { shape, string, element } from "prop-types";
import {currencyFormater} from "../../common/helpers/formatters";

function PeopleListItem({ item, editBtn }) {
  return (
    <li className="people-list-item">
      <label>
        <span className="name-text">{item.name}</span>
        <span className="dob-text">{item.birthDate}</span>
      </label>
      <label>{item.jobTitle}</label>
      <label>{item.country}</label>
      <label>
        <span>{currencyFormater(item.salary)} USD</span>
        <span className="salary-sub-text">per year</span>
      </label>
      {editBtn}
    </li>
  );
}

PeopleListItem.propTypes = {
  item: shape({
    name: string,
    birthDate: string,
    jobTitle: string,
    country: string,
    salary: string,
  }),
  editBtn: element,
};

export default PeopleListItem;
