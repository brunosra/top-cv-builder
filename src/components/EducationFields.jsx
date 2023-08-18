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
        <div className="header">
          <h2>Education Information</h2>
        </div>
        <div className="body">
          <form action="#" id={id} method="POST">
            {Object.keys(data).map((key) => {
              return (
                <div className="row" key={key}>
                  <TextField
                    name="degree"
                    label="Degree name"
                    handleChange={handleTextFieldChange}
                    value={data[key].degree}
                    rowkey={key}
                  />
                  <TextField
                    name="institution"
                    label="Institution name"
                    handleChange={handleTextFieldChange}
                    value={data[key].institution}
                    rowkey={key}
                  />
                  <TextField
                    name="date"
                    label="Date and details"
                    handleChange={handleTextFieldChange}
                    value={data[key].date}
                    rowkey={key}
                  />
                  <button onClick={handleDeleteLine} rowkey={key}>
                    <span className="material-symbols-outlined" rowkey={key}>
                      delete
                    </span>
                  </button>
                </div>
              );
            })}
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
