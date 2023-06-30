import "../Skills/Skills.css";

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <h2>Technical Skills</h2>
      <div className="tech">
        <section className="client-side">
          <h3>Client Side</h3>
          <ul>
            <li className="skills-list">HTML5</li>
            <li className="skills-list">CSS</li>
            <li className="skills-list">JavaScript</li>
            <li className="skills-list">React</li>
          </ul>

          <h3>Server Side</h3>
          <ul>
            <li className="skills-list">SQL</li>
            <li className="skills-list">Node</li>
          </ul>
        </section>
        <section className="tools">
          <h3>Tools</h3>
          <ul>
            <li className="skills-list">Git</li>
            <li className="skills-list">GitHub</li>
            <li className="skills-list">Virtual Studio Code</li>
            <li className="skills-list">Figma</li>
            <li className="skills-list">Slack</li>
            <li className="skills-list">Netlify</li>
            <li className="skills-list">Render</li>
            <li className="skills-list">Microsoft Office 365</li>
          </ul>
        </section>
      </div>
      <div className="personal">
        <h2>Personal Attributes</h2>
        <section className="attributes">
          <ul>
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
    </div>
  );
}

export default Skills;
