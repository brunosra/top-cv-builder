import "./Resume.css";
import { v4 as uuidv4 } from "uuid";
import EditButton from "./components/EditButton";
import { useState } from "react";
import PersonalFields from "./components/PersonalFields";
import EducationFields from "./components/EducationFields";
import ExperienceFields from "./components/ExperienceFields";

let personalDefault = {
  name: "John Smith",
  email: "john.smith@fakemail.com",
  phone: "+55 5555 5555",
  location: "Somewhere, USA",
};
let educationDefaultArr = {
  [uuidv4()]: {
    degree: "BSc. Industrial Design",
    institution: "Universidade Estácio de Sá",
    date: "Graduated on 2004",
  },
  [uuidv4()]: {
    degree: "BSc. Mechanical Engineering",
    institution: "Universidade do Estado do RJ",
    date: "Unfinished · 1998-2000",
  },
};

let experienceDefaultArr = {
  [uuidv4()]: {
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
  [uuidv4()]: {
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
  [uuidv4()]: {
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
};

function Resume() {
  const [mode, setMode] = useState("view");
  const [data, setData] = useState({
    personal: personalDefault,
    education: educationDefaultArr,
    experience: experienceDefaultArr,
  });
  const [tempData, setTempData] = useState({
    personal: personalDefault,
    education: educationDefaultArr,
    experience: experienceDefaultArr,
  });

  const openPersonalForm = () => {
    setTempData({ ...data });
    setMode("editPersonal");
    document.body.style.overflow = "hidden";
  };

  const openEducationForm = () => {
    setTempData({ ...data });
    setMode("editEducation");
    document.body.style.overflow = "hidden";
  };

  const openExperienceForm = () => {
    setTempData({ ...data });
    setMode("editExperience");
    document.body.style.overflow = "hidden";
  };

  const cancelForm = () => {
    document.body.style.overflow = "auto";
    setMode("view");
  };

  const captureDataFromTextFields = (e, rowKey = "") => {
    setTempData({ ...data });

    let formID = e.target.form.id;
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    let tempObj = { ...tempData[formID] };

    if (formID === "personal") {
      tempObj[fieldName] = fieldValue;
    } else {
      let rowKey = e.target.getAttribute("rowkey");
      tempObj[rowKey] = { ...tempObj[rowKey], [fieldName]: fieldValue };
    }

    setTempData({ ...tempData, [formID]: tempObj });
  };

  const submitData = (e) => {
    e.preventDefault();
    setData({
      ...tempData,
    });
    setMode("view");
  };

  const addLine = (e, id) => {
    e.preventDefault();
    let newKey = uuidv4();
    let tempObj = {
      ...tempData[id],
      [newKey]: {},
    };

    setTempData({ ...tempData, [id]: tempObj });
  };

  const removeLine = (e, id) => {
    e.preventDefault();
    let key = e.target.getAttribute("rowkey");

    let tempObj = {
      ...tempData[id],
    };

    delete tempObj[key];
    setTempData({ ...tempData, [id]: { ...tempObj } });
  };

  return (
    <>
      {}
      {mode == "editPersonal" ? (
        <PersonalFields
          handleTextFieldChange={captureDataFromTextFields}
          handleSubmit={submitData}
          handleCancel={cancelForm}
          id="personal"
          data={tempData.personal}
        />
      ) : null}

      {mode == "editEducation" ? (
        <EducationFields
          handleTextFieldChange={captureDataFromTextFields}
          handleSubmit={submitData}
          handleCancel={cancelForm}
          handleAddLine={(e) => addLine(e, "education")}
          handleDeleteLine={(e) => removeLine(e, "education")}
          id="education"
          data={tempData.education}
        />
      ) : null}

      {mode == "editExperience" ? (
        <ExperienceFields
          handleTextFieldChange={captureDataFromTextFields}
          handleSubmit={submitData}
          handleCancel={cancelForm}
          handleAddLine={(e) => addLine(e, "experience")}
          handleDeleteLine={(e) => removeLine(e, "experience")}
          id="experience"
          data={tempData.experience}
        />
      ) : null}

      <div className="page resume">
        <div className="header-resume personal-info">
          <EditButton handleClick={openPersonalForm} />
          <h1>{data.personal.name}</h1>
          {data.personal.email && (
            <span className="info">
              <span className="material-symbols-outlined">mail</span>{" "}
              {data.personal.email}
            </span>
          )}
          {data.personal.phone && (
            <span className="info">
              <span className="material-symbols-outlined">phone_in_talk</span>{" "}
              {data.personal.phone}
            </span>
          )}
          {data.personal.location && (
            <span className="info">
              <span className="material-symbols-outlined">location_on</span>{" "}
              {data.personal.location}
            </span>
          )}
        </div>
        <div className="section-resume education">
          <EditButton handleClick={openEducationForm} />
          <h2>Education</h2>
          <ul>
            {Object.keys(data.education).map((key) => (
              <li key={key}>
                <h3>{data.education[key].degree}</h3>
                <p>{data.education[key].institution}</p>
                <p>{data.education[key].date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-resume experience">
          <EditButton handleClick={openExperienceForm} />
          <h2>Latest Experience</h2>
          <ul>
            {Object.keys(data.experience).map((key) => (
              <li key={key}>
                <h3>{data.experience[key].position}</h3>
                <h4>
                  {data.experience[key].company} ·{" "}
                  <span className="date">
                    {data.experience[key].fromDate} –{" "}
                    {data.experience[key].toDate}
                  </span>
                </h4>
                <p>{data.experience[key].description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
