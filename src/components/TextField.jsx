import { useState } from "react";
import "./TextField.css";

function TextInput({
  name,
  label,
  initialValue = "",
  type = "text",
  handleChange,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="fieldGroup">
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        {...props}
        name={name}
        type={type}
        // value={initialValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
