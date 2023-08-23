import { Link } from "react-router-dom";
import "../Projects/Projects.css";
import projects from "../../Utilities/projectInfo";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section className="pics">
        {projects.map((project) => {
          return (
            <aside className="pic-card" key={project.id}>
              <img
                src={project.imgSrc}
                alt={project.alt}
                className="project-picture"
              />
              <div className="project-info">
                <a href={project.link}>{project.title}</a>
                <p>{project.description}</p>
              </div>
            </aside>
          );
        })}
      </section>
      <aside className="notes">
        <h3>Notes about Projects</h3>
        <ul>
          <li>
            The Quotes Generator originally did not include the database until I
            learnt PostgreSQL. I then modified the project to include a
            database. This is my 1st project that included a backend making GET
            requests to the database.
          </li>
          <li>The Hub Chat project makes GET, POST and DELETE requests.</li>
          <li>
            Soulful Truths was my first team project where I was the project
            manager as well as being responsible for the UX/UI and the Frontend.
            This project helped me understand how to interact and work with
            GitHub in a collaborative way to avoid merge conflicts.
          </li>
          <li>
            The hotel project was the first big React project that had to be
            completed over 3 weeks.
          </li>
          <li>
            Rap and Blues project was an assessment during my time at the
            bootcamp. This backend follows the CRUD method
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
      <Link to="/" className="list-item">
        Back
      </Link>
    </div>
  );
}

export default Projects;
