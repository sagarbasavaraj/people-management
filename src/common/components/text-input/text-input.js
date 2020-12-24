import React, { useState } from "react";
import classnames from "classnames";
import Text from "../typograhy/text";
import { string, func } from "prop-types";
import "./text-input.scss";

function TextInput({
  name,
  value,
  label,
  onChange,
  helperText = "",
  onBlur,
  onFocus,
  className,
  inputClassName,
  type = "text",
  placeholder = "",
  error = "",
}) {
  const [focused, setFocused] = useState(false);
  const containerClassName = classnames("text-input__container", {
    [className]: !!className,
  });
  const textInputClassName = classnames("text-input", {
    [inputClassName]: !!inputClassName,
    error,
  });
  const labelClassName = classnames("input-label", {
    focused,
    error
  });

  const handleFocus = (e) => {
    setFocused(true);
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };
  return (
    <div className={containerClassName}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={textInputClassName}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        data-testid={name}
      />
      {helperText && <Text text={helperText} />}
      {error && <Text text={error} className="error" />}
    </div>
  );
}

TextInput.propTypes = {
  name: string.isRequired,
  value: string,
  label: string.isRequired,
  onChange: func.isRequired,
  helperText: string,
  onBlur: func,
  onFocus: func,
  className: string,
  inputClassName: string,
  type: string,
  placeholder: string,
  error: string,
};

export default TextInput;
