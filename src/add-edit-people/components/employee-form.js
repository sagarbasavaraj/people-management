import React from "react";
import { TextInput, Dropdown } from "../../common/components";

const COUNTRIES = ["Portugal", "India", "Germany"];

function EmployeeForm() {
  return (
    <div className="employee-form-container">
      <TextInput
        label="Name"
        placeholder="e.g. Jane Doe"
        helperText="First and last names"
      />
      <TextInput
        label="Birthdate"
        placeholder="e.g. 17/02/1990"
        helperText="DD/MM/YYYY"
      />
      <TextInput
        label="Job title"
        placeholder="e.g Product manager"
        helperText="What is their role?"
      />
      <Dropdown
        label="Country"
        options={COUNTRIES}
        helperText="Where are they based?"
      />
      <TextInput
        label="Salary"
        placeholder="e.g. 50000"
        helperText="Gross yearly salary"
      />
    </div>
  );
}

export default EmployeeForm;
