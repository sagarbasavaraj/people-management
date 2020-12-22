import React, { useState, useEffect, useRef } from "react";
import HelperText from "../typograhy/helper-text";
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
}) {
  const [open, setOpen] = useState(false);
  const dropdownSelectRef = useRef(null);
  const triggerClassName = classnames("dropdown-select__trigger", { open });
  const labelClassName = classnames("dropdown-label", { open });

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
      <div className="dropdown-select" ref={dropdownSelectRef}>
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
      {helperText && <HelperText text={helperText} />}
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
  helperText: string
};

export default Dropdown;
