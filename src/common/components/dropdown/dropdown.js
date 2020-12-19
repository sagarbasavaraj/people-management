import React, { useState, useEffect, useRef } from "react";
import HelperText from "../typograhy/helper-text";
import classnames from "classnames";
import "./dropdown.scss";

function Dropdown({
  label,
  name,
  value,
  options = [],
  onClick,
  helperText = "",
}) {
  const [open, setOpen] = useState(false);
  const dropdownSelectRef = useRef(null);
  const triggerClassName = classnames("dropdown-select__trigger", { open });
  const labelClassName = classnames("dropdown-label", { open });

  const handleOutsideClick = (e) => {
    const select = dropdownSelectRef.current;
    if (!select.contains(e.target)) {
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
    onClick({ name, value });
  };

  return (
    <div className="dropdown-wrapper" onClick={handleDropdownClick}>
      <label className={labelClassName}>{label}</label>
      <div className="dropdown-select" ref={dropdownSelectRef}>
        <div className={triggerClassName}>
          <span>{value}</span>
          <i className="fas fa-chevron-down dropdown-arrow"></i>
        </div>
        {open && (
          <div className="dropdown-options" onClick={handleOptionClick}>
            {options.map((option) => {
              const optionClassName = classnames("dropdown-option", {
                selected: option === value,
              });
              return (
                <span
                  key={option}
                  className={optionClassName}
                  data-value={option}
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

export default Dropdown;
