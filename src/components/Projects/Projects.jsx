import { useState } from "react";
import { Link } from "react-router-dom";
import "../Projects/Projects.css";
import projects from "../../Utilities/projectInfo";
import github from "../../Assets/github.png";

function Project() {
  const [flip, setFlip] = useState(false);
  return (
    <div>
      <h1>Experiment Flip card</h1>
      <p>(Click cards to view for information)</p>
      <section className="pics card-grid">
        {projects.map((project) => {
          return (
            <div className={`card ${flip ? "flip" : ""}`}>
              <aside
                className="pic-card front-info"
                key={project.id}
                id={project.id}
                onClick={() => setFlip(!flip)}
              >
                <img
                  src={project.imgSrc}
                  alt={project.alt}
                  className="project-picture"
                />
                <div className="project-info">
                  <aside className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                    {project.github ? (
                      <a
                        href={project.github}
                        className="github"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={github} alt="github icon" />
                      </a>
                    ) : null}
                  </aside>
                  <p>Created: {project.date}</p>
                  <p>{project.description}</p>
                </div>
              </aside>
              <div className="back-info" onClick={() => setFlip(!flip)}>
                <p>{project.info}</p>
              </div>
            </div>
          );
        })}
      </section>
      {/* <aside className="notes">
        <h2>Notes about Projects</h2>
        <ul>
          <li>
            The{" "}
            <b>
              <i>Quotes Generator</i>
            </b>{" "}
            originally did not include the database until I learnt PostgreSQL. I
            then modified the project to include a database. This is my 1st
            project that included a backend making GET requests to the database.
          </li>
          <li>
            The{" "}
            <b>
              <i>Hub Chat</i>
            </b>{" "}
            project makes GET, POST and DELETE requests.
          </li>
          <li>
            <b>
              <i>Soulful Truths</i>
            </b>{" "}
            was my first team project where I was the project manager as well as
            being responsible for the UX/UI and the Frontend. This project
            helped me understand how to interact and work with GitHub in a
            collaborative way to avoid merge conflicts.
          </li>
          <li>
            The{" "}
            <b>
              <i>Hotel</i>
            </b>{" "}
            project was the first big React project that had to be completed
            over 3 weeks.
          </li>
          <li>
            <b>
              <i>Rap and Blues</i>
            </b>{" "}
            project was an assessment during my time at the bootcamp. This
            backend follows the CRUD method
          </li>
          <li>
            <b>
              <i>Baby Name Nest</i>
            </b>{" "}
            was my own take on a React challenge which gave a json file with
            names. I decided to make it a challenge for myself to include a
            database and unisex option. Each sex option gives the name a
            different background color when chosen
          </li>
          <li>
            <b>
              <i>Wix clone</i>
            </b>{" "}
            was an HTML and CSS challenge to try and recreate a resume. This
            helped me about having a plan of how to tackle moving parts on a
            page instead of just jumping in to start coding
          </li>
          <li>
            <b>
              <i>Good PR</i>
            </b>{" "}
            is an application that pulls information from GitHub to track team
            members participating in the final project at Code Your Future. This
            was to ensure that members were contributing fairly to the project.
            During this project, I acted in the capacity of a Technical lead and
            a Full Stack Developer
          </li>
          <li>
            The{" "}
            <b>
              <i>Visual Calendar</i>
            </b>{" "}
            was a presentation I created to solve what I saw as a gap in regards
            to booking meetings and finding out peoples schedules and
            availabilities in the organization.
          </li>
        </ul>
      </aside> */}
      <Link to="/" className="list-item back">
        Back
      </Link>
    </div>
  );
}

export default Project;
