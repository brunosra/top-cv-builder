import { useState } from "react";
import Resume from "./Resume";
import TextField from "./components/TextField";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState({});

  function handleTextFieldChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setText(e.target.value);
  }

  return (
    <>
      {console.log(data)}
      <div className="forms-sidebar">
        <div className="card">
          <div className="header">
            <h2>Personal Information</h2>
            <span className="material-symbols-outlined">
              expand_more expand_less
            </span>
          </div>
          <div className="body">
            <TextField name="bunda" handleChange={handleTextFieldChange} />
            <TextField name="teste" handleChange={handleTextFieldChange} />
            <button>Save</button>
          </div>
        </div>
      </div>
      <Resume
        name="John Smith"
        email="john@smith.com"
        phone="+1 55 555 55 55"
        location="Narnia, USA"
      />
    </>
  );
}

export default App;
