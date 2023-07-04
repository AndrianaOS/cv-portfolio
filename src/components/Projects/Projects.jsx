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
    </div>
  );
}

export default Projects;
