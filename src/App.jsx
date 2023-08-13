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
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  }

  function handlePersonalSubmit(e) {
    e.preventDefault();
    setData({ ...data, personal: { ...personalData } });
  }

  return (
    <>
      <div className="forms-sidebar">
        <PersonalFields
          id="personal"
          handleSubmit={handlePersonalSubmit}
          handleTextFieldChange={handleTextFieldChange}
          data={personalData}
        />
      </div>
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
