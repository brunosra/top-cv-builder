import TextField from "./TextField";
import "./ExperienceFields.css";

function ExperienceFields({
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
          <h2>Experience Information</h2>
        </div>
        <div className="body">
          <form action="#" id={id} method="POST">
            {Object.keys(data).map((key) => {
              return (
                <div className="row" key={key}>
                  <TextField
                    name="position"
                    label="Position name"
                    handleChange={handleTextFieldChange}
                    value={data[key].position}
                    rowkey={key}
                  />
                  <TextField
                    name="company"
                    label="Company name"
                    handleChange={handleTextFieldChange}
                    value={data[key].company}
                    rowkey={key}
                  />
                  <TextField
                    name="fromDate"
                    label="When you started to work there"
                    handleChange={handleTextFieldChange}
                    value={data[key].fromDate}
                    rowkey={key}
                  />
                  <TextField
                    name="toDate"
                    label="Until when you worked there"
                    handleChange={handleTextFieldChange}
                    value={data[key].toDate}
                    rowkey={key}
                  />
                  <div className="fieldGroup descriptionField">
                    <label htmlFor="description">
                      Explain what your major responsibilities
                    </label>
                    <textarea
                      name="description"
                      onChange={handleTextFieldChange}
                      value={data[key].description}
                      rowkey={key}
                    />
                  </div>
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

export default ExperienceFields;
