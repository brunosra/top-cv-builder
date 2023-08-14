import { useState } from "react";
import Resume from "./Resume";
import PersonalFields from "./components/PersonalFields";
import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({});
  const [data, setData] = useState({
    personal: {},
    education: [],
    experience: [],
  });

  function handleTextFieldChange(e) {
    setPersonalData({ ...personalData });
  }

  function handlePersonalSubmit(e) {
    e.preventDefault();
    let tempObj = {};
    const fields = [...e.target.form].filter(
      (elm) => elm.tagName.toLowerCase() === "input"
    );
    fields.map((item) => {
      tempObj[item.name] = item.value;
    });
    setPersonalData({ ...personalData, ...tempObj });
  }

  return (
    <>
      <PersonalFields
        id="personal"
        handleSubmit={handlePersonalSubmit}
        // handleTextFieldChange={handleTextFieldChange}
        data={personalData}
      />
      <Resume
        name={data.personal.name}
        email={data.personal.email}
        phone={data.personal.phone}
        location={data.personal.location}
      />
    </>
  );
}

export default App;
