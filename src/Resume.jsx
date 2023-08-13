// import { useState } from "react";
import "./Resume.css";

function Resume() {
  // const [count, setCount] = useState(0);

  return (
    <div className="page resume">
      <h1>Bruno Almeida</h1>
      <div className="section-resume personal-info">
        <span>email@email.com</span> · <span>+351 999 999 999</span>
      </div>
      <div className="section-resume education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Institution Name</h3>
            <p>Title of Study</p>
            <p>Date of Study</p>
          </li>
          <li>
            <h3>Institution Name</h3>
            <p>Title of Study</p>
            <p>Date of Study</p>
          </li>
          <li>
            <h3>Institution Name</h3>
            <p>Title of Study</p>
            <p>Date of Study</p>
          </li>
        </ul>
      </div>
      <div className="section-resume experience">
        <h2>Latest Experience</h2>
        <ul>
          <li>
            <h3>Position Title</h3>
            <h4>
              Company Name · <span className="date">From date – to date</span>
            </h4>
            <p>Description and Main Responsibilities</p>
          </li>
          <li>
            <h3>Position Title</h3>
            <h4>
              Company Name · <span className="date">From date – to date</span>
            </h4>
            <p>Description and Main Responsibilities</p>
          </li>
          <li>
            <h3>Position Title</h3>
            <h4>
              Company Name · <span className="date">From date – to date</span>
            </h4>
            <p>Description and Main Responsibilities</p>
          </li>
          <li>
            <h3>Position Title</h3>
            <h4>
              Company Name · <span className="date">From date – to date</span>
            </h4>
            <p>Description and Main Responsibilities</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
