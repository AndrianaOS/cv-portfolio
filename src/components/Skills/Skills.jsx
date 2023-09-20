import { Link } from "react-router-dom";
import "../Skills/Skills.css";

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <h2>Technical Skills</h2>
      <div className="tech">
        <section className="client-server">
          <aside className="client-side">
            <h3>Client Side</h3>
            <ul>
              <li className="skills-list">HTML5</li>
              <li className="skills-list">CSS</li>
              <li className="skills-list">JavaScript</li>
              <li className="skills-list">React.JS</li>
            </ul>
          </aside>

          <aside className="server-side">
            <h3>Server Side</h3>
            <ul>
              <li className="skills-list">PostgreSQL</li>
              <li className="skills-list">Node.JS</li>
              <li className="skills-list">Express.JS</li>
              <li className="skills-list">Rest API</li>
            </ul>
          </aside>
        </section>
        <section className="tools">
          <h3>Tools</h3>
          <ul>
            <li className="skills-list">Git</li>
            <li className="skills-list">GitHub</li>
            <li className="skills-list">GitHub Project Boards</li>
            <li className="skills-list">Figma</li>
            <li className="skills-list">Miro</li>
            <li className="skills-list">Slack</li>
            <li className="skills-list">Bootstrap</li>
            <li className="skills-list">Microsoft Office 365</li>
          </ul>
        </section>
      </div>

      <div className="personal">
        <h2>Personal Attributes</h2>
        <section className="attributes">
          <ul>
            <li className="skills-item">
              Managed and contributed to the development of a group project
              named
              <a href="https://soulful-truths.netlify.app">
                {" "}
                Soulful Truths
              </a>{" "}
              in an Agile framework
            </li>
            <li className="skills-item">
              Excellent listening, written and communication skills.
            </li>
            <li className="skills-item">
              Can work efficiently under pressure either supervised,
              unsupervised or as part of a team
            </li>
            <li className="skills-item">
              Analytical approach to problem solving.
            </li>
            <li className="skills-item">
              Great organizational and time management skills.
            </li>
            <li className="skills-item"> Desire to learn and develop.</li>
          </ul>
        </section>
      </div>
      <Link to="/" className="list-item back">
        Back
      </Link>
    </div>
  );
}

export default Skills;
