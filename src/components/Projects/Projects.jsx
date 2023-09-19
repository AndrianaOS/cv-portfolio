import { useState } from "react";
import { Link } from "react-router-dom";
import "../Projects/Projects.css";
import projects from "../../Utilities/projectInfo";
import github from "../../Assets/github.png";

function Project() {
  const [flippedCardId, setFlippedCardId] = useState(null);

  return (
    <div>
      <h1>Projects</h1>
      <p>(Click each card to view for information)</p>
      <section className="pics card-grid">
        {projects.map((project) => {
          const isFlipped = project.id === flippedCardId;
          return (
            <div
              className={`card ${isFlipped ? "flip" : ""}`}
              key={project.id}
              id={project.id}
              onClick={() => setFlippedCardId(isFlipped ? null : project.id)}
            >
              <aside className="pic-card front-info">
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
              <div className="back-info">
                <h2>{project.title}</h2>
                <p>{project.info}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          );
        })}
      </section>
      <Link to="/" className="list-item back">
        Back
      </Link>
    </div>
  );
}

export default Project;
