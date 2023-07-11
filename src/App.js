import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FrontPage from "./components/FrontPage/FrontPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Jobs from "./components/Jobs/Jobs";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
