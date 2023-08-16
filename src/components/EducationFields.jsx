import TextField from "./TextField";

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
                label="Degree Name"
                handleChange={handleTextFieldChange}
                value={data.degree}
              />
              <TextField
                name="institution"
                label="Institution Name"
                handleChange={handleTextFieldChange}
                value={data.institution}
              />
              <TextField
                name="date"
                label="Date and Details"
                handleChange={handleTextFieldChange}
                value={data.date}
              />
              <button onClick={handleDeleteLine}>
                <span className="material-symbols-outlined">delete</span> Remove
              </button>
            </div>
            <button onClick={handleAddLine}>
              <span className="material-symbols-outlined">add</span> Add Line
            </button>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EducationFields;
