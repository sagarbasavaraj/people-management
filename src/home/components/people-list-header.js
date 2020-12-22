import React from "react";

const HEADERS = ["Employee", "Job Title", "Country", "Salary"];

function PeopleListHeader() {
  return (
    <li className="people-list-header">
      {HEADERS.map((header) => (
        <label key={header}>{header}</label>
      ))}
    </li>
  );
}

export default PeopleListHeader;
