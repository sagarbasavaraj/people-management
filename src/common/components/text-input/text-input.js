import React, { useState } from "react";
import classnames from "classnames";
import HelperText from "../typograhy/helper-text";
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
}) {
  const [focused, setFocused] = useState(false);
  const containerClassName = classnames("text-input__container", {
    [className]: !!className,
  });
  const textInputClassName = classnames("text-input", {
    [inputClassName]: !!inputClassName,
  });
  const labelClassName = classnames("input-label", {
    focused,
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
      <label className={labelClassName}>{label}</label>
      <input
        type={type}
        className={textInputClassName}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
      />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
}

export default TextInput;
