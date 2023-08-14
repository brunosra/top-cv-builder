import { useState } from "react";
import "./TextField.css";

function TextInput({
  name,
  label,
  type = "text",
  handleChange,
  value = "",
  ...props
}) {
  return (
    <div className="fieldGroup">
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        name={name}
        type={type}
        value={value}
        // value={initialValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
