import "./Resume.css";

let educationDefaultArr = [
  {
    uuid: 1,
    degree: "BSc. Industrial Design",
    institution: "Universidade Estácio de Sá",
    date: "Graduated on 2004",
  },
  {
    uuid: 2,
    degree: "BSc. Mechanical Engineering",
    institution: "Universidade do Estado do RJ",
    date: "Unfinished · 1998-2000",
  },
];

let experienceDefaultArr = [
  {
    uuid: 3,
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
  {
    uuid: 4,
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
  {
    uuid: 5,
    position: "Mr. Super Director",
    company: "Super company",
    fromDate: "Jan 20XX",
    toDate: "Dec 20XX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat mi, fringilla et lectus id, porttitor ultrices nisl. Suspendisse scelerisque, erat nec sagittis imperdiet, dolor tortor ultrices est, vitae ornare purus quam ac nulla. Donec sodales sit amet augue eget blandit.",
  },
];

function Resume({
  name = "John Smith",
  email = "",
  phone = "",
  location = "",
  education = educationDefaultArr,
  experience = experienceDefaultArr,
}) {
  return (
    <div className="page resume">
      <div className="header-resume personal-info">
        <h1>{name}</h1>
        {email && (
          <span className="info">
            <span className="material-symbols-outlined">mail</span> {email}
          </span>
        )}
        {phone && (
          <span className="info">
            <span className="material-symbols-outlined">phone_in_talk</span>{" "}
            {phone}
          </span>
        )}
        {location && (
          <span className="info">
            <span className="material-symbols-outlined">location_on</span>{" "}
            {location}
          </span>
        )}
      </div>
      <div className="section-resume education">
        <h2>Education</h2>
        <ul>
          {education.map((item) => (
            <li key={item.uuid}>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <p>{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="section-resume experience">
        <h2>Latest Experience</h2>
        <ul>
          {experience.map((item) => (
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
  );
}

export default Resume;
