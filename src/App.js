import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FrontPage from "./components/FrontPage/FrontPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills";
import Jobs from "./components/Jobs/Jobs";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;