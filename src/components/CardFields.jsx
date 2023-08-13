import TextField from "./TextField";
import "./CardFields.css";

function CardFields({ handleTextFieldChange }) {
  return (
    <div className="card" id="form">
      <div className="header">
        <h2>Personal Information</h2>
        <span className="material-symbols-outlined">
          expand_more expand_less
        </span>
      </div>
      <div className="body">
        <form action="#">
          <TextField
            name="name"
            label="First and Last Name"
            handleChange={handleTextFieldChange}
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
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default CardFields;
