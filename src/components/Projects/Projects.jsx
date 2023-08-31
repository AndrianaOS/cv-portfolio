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
            <aside className="pic-card" key={project.id} id={project.id}>
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
        <h2>Notes about Projects</h2>
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
          <li>
            Baby Name Nest was my own take on a React challenge which gave a
            json file with names. I decided to make it a challenge for myself to
            include a database and unisex option. Each sex option gives the name
            a different background color when chosen
          </li>
          <li>
            Wix clone was an HTML and CSS challenge to try and recreate a
            resume. This helped me about having a plan of how to tackle moving
            parts on a page instead of just jumping in to start coding
          </li>
          <li>
            Good PR is an application that pulls information from GitHub to
            track team members participating in the final project at Code Your
            Future. This was to ensure that members were contributing fairly to
            the project. During this project, I acted in the capacity of a
            Technical lead and a Full Stack Developer
          </li>
          <li>
            The Visual Calendar was a presentation I created to solve what I saw
            as a gap in regards to booking meetings and finding out peoples
            schedules and availabilities.
          </li>
        </ul>
      </aside>
      <Link to="/" className="list-item">
        Back
      </Link>
    </div>
  );
}

export default Projects;
