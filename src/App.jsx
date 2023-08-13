import { useState } from "react";
import Resume from "./Resume";
import TextField from "./components/TextField";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="forms-sidebar">
        <div className="card">
          <div className="header">
            <h2>Personal Information</h2>
            <span className="material-symbols-outlined">
              expand_more expand_less
            </span>
          </div>
          <div className="body">
            <TextField value="test" />
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
