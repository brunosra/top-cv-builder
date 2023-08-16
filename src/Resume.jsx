import "./Resume.css";
import { v4 as uuidv4 } from "uuid";
import EditButton from "./components/EditButton";
import { useState } from "react";
import PersonalFields from "./components/PersonalFields";

let personalDefault = {
  name: "John Smith",
  email: "john.smith@fakemail.com",
  phone: "+55 5555 5555",
  location: "Somewhere, USA",
};
let educationDefaultArr = [
  {
    uuid: uuidv4(),
    degree: "BSc. Industrial Design",
    institution: "Universidade Estácio de Sá",
    date: "Graduated on 2004",
  },
  {
    uuid: uuidv4(),
    degree: "BSc. Mechanical Engineering",
    institution: "Universidade do Estado do RJ",
    date: "Unfinished · 1998-2000",
  },
];

let experienceDefaultArr = [
  {
    uuid: uuidv4(),
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
  {
    uuid: uuidv4(),
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
  {
    uuid: uuidv4(),
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
];

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

  const cancelForm = () => {
    document.body.style.overflow = "auto";
    setMode("view");
  };

  const captureDataFromTextFields = (e) => {
    setTempData({ ...data });

    let formID = e.target.form.id;
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    let tempObj = { ...tempData[formID] };
    console.log(tempData[formID]);
    tempObj[fieldName] = fieldValue;

    setTempData({ ...tempData, [formID]: tempObj });
  };

  const submitData = (e) => {
    e.preventDefault();
    setData({
      ...tempData,
    });
    setMode("view");
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
          <EditButton handleClick={() => console.log("click!")} />
          <h2>Education</h2>
          <ul>
            {data.education.map((item) => (
              <li key={item.uuid}>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <p>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-resume experience">
          <EditButton handleClick={() => console.log("click!")} />
          <h2>Latest Experience</h2>
          <ul>
            {data.experience.map((item) => (
              <li key={item.uuid}>
                <h3>{item.position}</h3>
                <h4>
                  {item.company} ·{" "}
                  <span className="date">
                    {item.fromDate} – {item.toDate}
                  </span>
                </h4>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
