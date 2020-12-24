import {
  checkForMandatory,
  validateCurrency,
  validateBirthDate,
} from "./validations";

describe("Validations", () => {
  describe("checkForMandatory", () => {
    test("should return error message when value is empty", () => {
      expect(checkForMandatory("")).toBe("Mandatory Field");
    });
    test("should not return error message when value is non emtpty", () => {
      expect(checkForMandatory("test")).toBe("");
    });
  });
  describe("validateCurrency", () => {
    test("should return error message when value is not in curreny format", () => {
      expect(validateCurrency("wewqee")).toBe(
        "Invalid Format (Valid format: 9,999,999.999)"
      );
    });
    test("should not return error message when value is in right format", () => {
      expect(checkForMandatory(1234, 34)).toBe("");
    });
  });
  describe("validateBirthDate", () => {
    test("should return error message date is invalid", () => {
      expect(validateBirthDate("111/02/2020")).toBe("Invalid Format");
    });
    test("should not return error message when date is valid", () => {
      expect(validateBirthDate("01/01/2020")).toBe("");
    });
    test("should return error message when date is future", () => {
      expect(validateBirthDate("01/01/2021")).toBe(
        "Birth date can't be in future"
      );
    });
  });
});
