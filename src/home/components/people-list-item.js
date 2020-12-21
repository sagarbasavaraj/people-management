import React from "react";

function PeopleListItem({ item, editBtn }) {
  return (
    <li className="people-list-item">
      <label>
        <span className="name-text">{item.name}</span>
        <span className="dob-text">{item.dateOfBirth}</span>
      </label>
      <label>{item.jobTitle}</label>
      <label>{item.country}</label>
      <label>
        <span>{item.salary}</span>
        <span className="salary-sub-text">per year</span>
      </label>
      {editBtn}
    </li>
  );
}

export default PeopleListItem;
