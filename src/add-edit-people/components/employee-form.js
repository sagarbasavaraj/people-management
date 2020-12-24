import React from "react";
import { string, func, shape, object } from "prop-types";
import { TextInput, Dropdown } from "../../common/components";

const COUNTRIES = ["Portugal", "India", "Germany"];

function EmployeeForm({ state, onChange, errors }) {
  return (
    <div className="employee-form-container">
      <TextInput
        label="Name"
        placeholder="e.g. Jane Doe"
        helperText="First and last names"
        onChange={onChange}
        name="name"
        value={state.name}
        error={errors.name}
      />
      <TextInput
        label="Birthdate"
        placeholder="e.g. 17/02/1990"
        helperText="DD/MM/YYYY"
        onChange={onChange}
        name="birthDate"
        value={state.birthDate}
        error={errors.birthDate}
      />
      <TextInput
        label="Job title"
        placeholder="e.g Product manager"
        helperText="What is their role?"
        onChange={onChange}
        name="jobTitle"
        value={state.jobTitle}
        error={errors.jobTitle}
      />
      <Dropdown
        label="Country"
        options={COUNTRIES}
        helperText="Where are they based?"
        onSelect={onChange}
        name="country"
        value={state.country}
        error={errors.country}
      />
      <TextInput
        label="Salary"
        placeholder="e.g. 50000"
        helperText="Gross yearly salary"
        onChange={onChange}
        name="salary"
        value={state.salary}
        error={errors.salary}
      />
    </div>
  );
}

EmployeeForm.propTypes = {
  state: shape({
    name: string,
    birthDate: string,
    jobTitle: string,
    country: string,
    salary: string,
  }),
  onChange: func.isRequired,
  errors: object,
};

export default EmployeeForm;
