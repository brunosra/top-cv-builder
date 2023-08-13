import TextField from "./TextField";
import { useState } from "react";

function PersonalFields({
  handleTextFieldChange,
  handleSubmit,
  id,
  data = {},
}) {
  let [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card" id={id}>
      <div className="header" onClick={handleToggle}>
        <h2>Personal Information</h2>
        <span className="material-symbols-outlined">
          {expanded ? "expand_less" : "expand_more"}
        </span>
      </div>
      {expanded ? (
        <div className="body">
          <form action="#">
            <TextField
              name="name"
              label="First and Last Name"
              handleChange={handleTextFieldChange}
              initialValue={data.name}
            />
            <TextField
              name="email"
              label="E-mail"
              handleChange={handleTextFieldChange}
            />
            <TextField
              name="phone"
              label="Phone"
              handleChange={handleTextFieldChange}
            />
            <TextField
              name="location"
              label="Location"
              handleChange={handleTextFieldChange}
            />
            <button onClick={handleSubmit}>Save</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default PersonalFields;
