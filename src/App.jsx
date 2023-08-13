import { useState } from "react";
import Resume from "./Resume";
// import TextField from "./components/TextField";
import CardFields from "./components/CardFields";
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
        <CardFields handleTextFieldChange={handleTextFieldChange} />
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
