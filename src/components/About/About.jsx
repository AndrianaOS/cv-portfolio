import { Link } from "react-router-dom";
import "../About/About.css";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <ul className="info">
        <li>
          I am a full time mum currently enrolled in an intensive software
          development course that I organize around my child's needs.
        </li>
        <li>
          I have always been fascinated by coding and my journey of learning to
          code began during lockdown. I learnt HTML and CSS by myself and fell
          in love with being able to build something that I can instantly see
          the results of.
        </li>
        <li>
          After my attempt to build a frontend webpage using only HTML and CSS,
          I realized I needed to learn more to improve the skills I had began to
          learn. Additionally I learnt JavaScript, React, Node.JS and SQL
          through the programme.
        </li>
        <li>
          I have an interest in learning new things and developing my skills and
          knowledge. Using the skills and knowledge I have acquired so far, I
          have built a number of webpages ranging from frontend projects to full
          stack projects.
        </li>
        <li>
          To expand my knowledge and expertise further, I have taken to self study TypeScript so as to help enhance my projects.
        </li>
        <li>
          After starting the course, I started mentoring others new to coding learn and
          overcome their blockers in mainly HTML and CSS.
        </li>
        <li>
          I have a background in the financial sector as well a degree in
          Forensic Science.
        </li>
      </ul>
      <Link to="/" className="list-item back">
        Back
      </Link>
    </div>
  );
}

export default About;
