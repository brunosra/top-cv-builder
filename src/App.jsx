import { useState } from "react";
import Resume from "./Resume";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Resume />
    </>
  );
}

export default App;
