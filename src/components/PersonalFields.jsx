import TextField from "./TextField";
import "./PersonalFields.css";

function PersonalFields({
  handleTextFieldChange,
  handleSubmit,
  handleCancel,
  id,
  data = {},
}) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="card">
        {console.log(data)}
        <div className="header">
          <h2>Personal Information</h2>
        </div>
        <div className="body">
          <form action="#" id={id} method="POST">
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
            <div className="lastButtons">
              <button onClick={handleCancel} className="ghost">
                Cancel
              </button>
              <button onClick={handleSubmit}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalFields;
