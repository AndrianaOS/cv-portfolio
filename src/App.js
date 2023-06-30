import "./App.css";
import Header from "./Header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Jobs from "./components/Jobs/Jobs";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Nav /> */}
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

// function Nav() {
//   <nav>
//     <Link to="/">Home</Link>

//     <Link to="/about">About Me</Link>

//     <Link to="/projects">Projects</Link>

//     <Link to="/skills">Skills</Link>

//     <Link to="/jobs">Jobs</Link>
//   </nav>;
// }

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section className="pics">
        <aside className="pic-card">
          <img src="/pokedex.png" alt="pokedex" className="project-picture" />
          <div className="project-info">
            <a href="https://andriana-pokedex.netlify.app/">Pokedex</a>
            <span> - Frontend webpage using React</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img
            src="/quote-generator.png"
            alt="quote"
            className="project-picture"
          />
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
          <img src="/chat app.png" alt="chat" className="project-picture" />
          <div className="project-info">
            <a href="https://chat-website-oerg.onrender.com">Hub Chat</a>
            <span> - Frontend and backend webpage using React and Node.JS</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img
            src="/soulful.png"
            alt="affirmation"
            className="project-picture"
          />
          <div className="project-info">
            <a href="https://soulful-truths.netlify.app">Soulful Truths</a>
            <span> - Frontend webpage using HTML, CSS and JavaScript</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src="/hotel.png" alt="hotel" className="project-picture" />
          <div className="project-info">
            <a href="https://cyf-andriana-hotel-react.netlify.app">
              Andriana Hotel
            </a>
            <span> - Frontend and backend webpage using React and Node.JS</span>
          </div>
        </aside>
        <aside className="pic-card">
          <img src="" alt="vlog" className="project-picture" />
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

export default App;
