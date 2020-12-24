import React, { useState, useEffect, useRef } from "react";
import Text from "../typograhy/text";
import classnames from "classnames";
import { string, arrayOf, func } from "prop-types";
import "./dropdown.scss";

/**
 * Custom Dropdown component.
 *
 * <Dropdown
 *   label="Country"
 *   options={["Portugal", "India"]}
 *   onSelect={() => null}
 *   value="Portugal"
 *   helperText="Select Country"
 * />
 */
function Dropdown({
  label,
  name,
  value,
  options = [],
  onSelect,
  helperText = "",
  error = "",
}) {
  const [open, setOpen] = useState(false);
  const dropdownSelectRef = useRef(null);
  const triggerClassName = classnames("dropdown-select__trigger", {
    open,
    error,
  });
  const labelClassName = classnames("dropdown-label", { open, error });

  const handleOutsideClick = (e) => {
    const select = dropdownSelectRef.current;
    if (select && !select.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });

  const handleDropdownClick = () => {
    setOpen((open) => !open);
  };

  const handleOptionClick = (e) => {
    const value = e.target.getAttribute("data-value");
    //make custom event structure so that while extracting value it will be consistent with text input
    onSelect({ target: { name, value } });
  };

  return (
    <div
      className="dropdown-wrapper"
      onClick={handleDropdownClick}
      aria-haspopup="listbox"
    >
      <label id={label} className={labelClassName}>
        {label}
      </label>
      <div
        className="dropdown-select"
        ref={dropdownSelectRef}
        data-testid="dropdown"
      >
        <div className={triggerClassName}>
          <span>{value}</span>
          <i className="fas fa-chevron-down dropdown-arrow"></i>
        </div>
        {open && (
          <div
            className="dropdown-options"
            onClick={handleOptionClick}
            role="listbox"
            aria-labelledby={label}
          >
            {options.map((option) => {
              const optionClassName = classnames("dropdown-option", {
                selected: option === value,
              });
              return (
                <span
                  key={option}
                  className={optionClassName}
                  data-value={option}
                  role="option"
                  aria-selected={option === value}
                >
                  {option}
                </span>
              );
            })}
          </div>
        )}
      </div>
      {helperText && <Text text={helperText} />}
      {error && <Text text={error} className="error" />}
    </div>
  );
}

Dropdown.propTypes = {
  /** Dropdown label */
  label: string.isRequired,
  /** name of dropdown */
  name: string.isRequired,
  /** value of dropdown */
  value: string,
  /** list of options */
  options: arrayOf(string),
  /** Callback which will be called on select of option  */
  onSelect: func.isRequired,
  /** Helper text */
  helperText: string,
  /** error text */
  error: string,
};

export default Dropdown;
