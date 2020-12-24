export const checkForMandatory = (val) => (!val && "Mandatory Field") || "";

export const validateCurrency = (val) => {
  return checkForMandatory(val) ||
    !/^(\d{1,3}(,\d{3})*|(\d+))(\.\d{1,3})?$/.test(val)
    ? "Invalid Format (Valid format: 9,999,999.999)"
    : "";
};

export const validateBirthDate = (val) => {
  let error =
    checkForMandatory(val) ||
    !/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/.test(val)
      ? "Invalid Format"
      : "";
  //check for future date error
  if (!error) {
    const [day, month, year] = val.split("/");
    const today = new Date().getTime();
    const selectedDateInMilliseconds = new Date(+year, +month - 1, +day).getTime();
    error =
      selectedDateInMilliseconds > today ? "Birth date can't be in future" : "";
  }
  return error;
};

export const addEditPeopleScreenValidations = {
  name: (val) => checkForMandatory(val),
  birthDate: (val) => {
    return validateBirthDate(val);
  },
  jobTitle: (val) => {
    return checkForMandatory(val);
  },
  country: (val) => {
    return checkForMandatory(val);
  },
  salary: (val) => {
    return validateCurrency(val);
  },
};
