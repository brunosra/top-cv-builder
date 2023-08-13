import { useState } from "react";
import "./TextField.css";

function TextInput({ name, label, type = "text", handleChange, ...props }) {
  const [value, setValue] = useState("");

  return (
    <div className="fieldGroup">
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        name={name}
        type={type}
        value={value}
        // value={initialValue}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
