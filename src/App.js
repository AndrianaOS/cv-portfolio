import "./App.css";
import Header from "./Header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <section className="info">
        <p>
          I am a full time mum currently enrolled in an intensive software
          development course that I have to organize my work around my child's
          needs.
        </p>
        <p>
          I have always been fascinated by coding and began my journey of
          learning to code during lockdown. I learnt HTML and CSS by myself,
          additionally I learnt JavaScript, React, Node.JS and SQL through the
          bootcamp.
        </p>
        <p>
          I have an interest in learning new things and developing my skills and
          knowledge. Using the skills and knowledge I have acquired so far, i
          have built a number of webpages ranging from frontend projects to full
          stack projects.
        </p>
        <p>
          I have a background in the financial sector as well a degree in
          Forensic Science.
        </p>
      </section>
    </div>
  );
}

function Projects() {
  return <h1>Projects</h1>;
}

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
            <li className="skills-list">
              Excellent listening, written and communication skills.
            </li>
            <li className="skills-list">
              Can work efficiently under pressure either supervised,
              unsupervised or as part of a team
            </li>
            <li className="skills-list">
              Analytical approach to problem solving.
            </li>
            <li className="skills-list">
              Great organizational and time management skills.
            </li>
            <li className="skills-list"> Desire to learn and develop.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function Jobs() {
  const jobs = [
    {
      date: "11/2019 - 12/2021",
      company: "CHL Mortgages",
      role: "Arrears Operations Specialist",
      duties:
        "Contacting customers by telephone regarding arrears on mortgage accounts and dealing with any queries and Taking payments for accounts that are in arrears and analysis of finances to work out repayment plans.",
    },
    {
      date: "02/2018 - 10/2019",
      company: "Metro Bank",
      role: "Customer Service Representative",
      duties:
        "Onboarding new personal and business customers providing lending facilities and dealing with queries, customer service duties and ATM balancing.",
    },
    {
      date: "10/2017 - 02/2018 ",
      company: "Metro Bank",
      role: "Lead Cashier",
      duties:
        "Supporting the cashiers in their tasks by performing observations, coaching sessions and till checks to improve service as well as handling cash orders and transfers for branch.",
    },
    {
      date: "10/2016 - 10/2017 ",
      company: "Metro Bank",
      role: "Cashier",
      duties:
        "Customer service queries, cash handling and training on new cashier staff",
    },
    {
      date: "11/2015 - 10/2016",
      company: "River Island",
      role: "Retail sales assistant",
      duties:
        "Dealing with customer queries and handling financial transactions.",
    },
  ];
  return (
    <div>
      <h1>Employment</h1>
      {jobs.map((job) => (
        <section>
          <span>{job.date} : </span>
          <span>{job.company}</span>
          <p>{job.role}</p>
          <p>{job.duties}</p>
        </section>
      ))}
    </div>
  );
}

export default App;
