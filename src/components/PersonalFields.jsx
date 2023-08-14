import TextField from "./TextField";
import { useState } from "react";

function PersonalFields({
  handleTextFieldChange,
  handleSubmit,
  id,
  data = {},
}) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="card" id={id}>
        {console.log(data)}
        <div className="header">
          <h2>Personal Information</h2>
        </div>
        <div className="body">
          <form action="#">
            <TextField
              name="name"
              label="First and Last Name"
              handleChange={handleTextFieldChange}
              value={data.name}
            />
            <TextField
              name="email"
              label="E-mail"
              handleChange={handleTextFieldChange}
              value={data.email}
            />
            <TextField
              name="phone"
              label="Phone"
              handleChange={handleTextFieldChange}
              value={data.phone}
            />
            <TextField
              name="location"
              label="Location"
              handleChange={handleTextFieldChange}
              value={data.location}
            />
            <button onClick={handleSubmit}>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalFields;
