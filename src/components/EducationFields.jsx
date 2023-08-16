import TextField from "./TextField";
import "./EducationFields.css";

function EducationFields({
  handleTextFieldChange,
  handleAddLine,
  handleDeleteLine,
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
          <h2>Education Information</h2>
        </div>
        <div className="body">
          <form action="#" id={id} method="POST">
            <div className="row" key="0">
              <TextField
                name="degree"
                label="Degree name"
                handleChange={handleTextFieldChange}
                value={data.degree}
              />
              <TextField
                name="institution"
                label="Institution name"
                handleChange={handleTextFieldChange}
                value={data.institution}
              />
              <TextField
                name="date"
                label="Date and details"
                handleChange={handleTextFieldChange}
                value={data.date}
              />
              <button onClick={handleDeleteLine}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
            <button onClick={handleAddLine}>
              <span className="material-symbols-outlined">add</span> Add Line
            </button>
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

export default EducationFields;
