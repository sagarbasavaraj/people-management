import React, { useState } from "react";
import classnames from "classnames";
import Text from "../typograhy/text";
import { string, func } from "prop-types";
import "./text-input.scss";

/**
 *
 * <TextInput /> component
 * 
 *  usage:
 *   <TextInput
        label="Name"
        placeholder="e.g. Jane Doe"
        helperText="First and last names"
        onChange={onChange}
        name="name"
        value={state.name}
        error={errors.name}
      />
 * 
 * @param {Object} {
 *   name - name property for text input,
 *   value - value of text input,
 *   label - label for text Input,
 *   onChange - Gets called when the user clicks on the button,
 *   helperText = "" - helper text,
 *   onBlur - callback handler for blur event,
 *   onFocus - callback handler for focus event,
 *   className - custom style for text input container,
 *   inputClassName - custom style for input element,
 *   type = "text" - type of input
 *   placeholder = "" - placeholder text, 
 *   error = "" - error string to be displayed,
 * }
 * @returns {React.Element} TextInput
 */
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
    error,
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
  /** name property for text input */
  name: string.isRequired,
  /**  value of text input*/
  value: string,
  /** label for text Input */
  label: string.isRequired,
  /** Gets called when the user clicks on the button */
  onChange: func.isRequired,
  /** helper text */
  helperText: string,
  /** callback handler for blur event */
  onBlur: func,
  /** callback handler for focus event  */
  onFocus: func,
  /** custom style for text input container */
  className: string,
  /** custom style for text input element */
  inputClassName: string,
  /** type of input */
  type: string,
  /** placeholder text */
  placeholder: string,
  /** error string */
  error: string,
};

export default TextInput;
