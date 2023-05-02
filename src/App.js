import "./App.css";
import Header from "./Header";
import FrontPage from "./FrontPage";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FrontPage /> */}

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
  return <h1>About</h1>;
}

function Projects() {
  return <h1>Projects</h1>;
}

function Skills() {
  return <h1>Skills</h1>;
}

function Jobs() {
  return <h1>Jobs</h1>;
}

export default App;
