import "../Projects/Projects.css";
import pokedex from "../../Assets/pokedex.png";
import chatApp from "../../Assets/chat app.png";
import soulful from "../../Assets/soulful.png";
import quote from "../../Assets/quote-generator.png";
import hotel from "../../Assets/hotel.png";
import babyNest from "../../Assets/baby-nest.png";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section className="pics">
        <aside className="pic-card">
          <img src={pokedex} alt="pokedex" className="project-picture" />
          <div className="project-info">
            <a href="https://andriana-pokedex.netlify.app/">Pokedex</a>
            <span> - Frontend webpage using React</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src={quote} alt="quote" className="project-picture" />
          <div className="project-info">
            <a href="https://andriana-quote-generator.onrender.com">
              Quote Generator
            </a>
            <span>
              - Frontend, backend and database webpage using React, Node.JS and
              PostgreSQL
            </span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src={chatApp} alt="chat" className="project-picture" />
          <div className="project-info">
            <a href="https://chat-website-oerg.onrender.com">Hub Chat</a>
            <span> - Frontend and backend webpage using React and Node.JS</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src={soulful} alt="affirmation" className="project-picture" />
          <div className="project-info">
            <a href="https://soulful-truths.netlify.app">Soulful Truths</a>
            <span> - Frontend webpage using HTML, CSS and JavaScript</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src={hotel} alt="hotel" className="project-picture" />
          <div className="project-info">
            <a href="https://cyf-andriana-hotel-react.netlify.app">
              Andriana Hotel
            </a>
            <span> - Frontend and backend webpage using React and Node.JS</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src={babyNest} alt="vlog" className="project-picture" />
          <div className="project-info">
            <a href="https://video-blog.onrender.com">Rap N Blues</a>
            <span>
              - Frontend, backend and database webpage using React, Node.JS and
              PostgreSQL
            </span>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Projects;
