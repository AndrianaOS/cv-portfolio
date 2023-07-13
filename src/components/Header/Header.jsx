import { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import NavBar from "../NavBar/NavBar";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((s) => !s);
  const handleClose = () => setShowMenu(false);
  return (
    <header className="header">
      <div className="header-menu">
        <aside className="name-role">
          <span>Andriana Saffo</span>
          <span>Full Stack Developer</span>
        </aside>
        <aside className="large-name-role">
          <span>Andriana Saffo | Full Stack Developer</span>
        </aside>
        {!showMenu && (
          <aside>
            <img
              src="open-menu.png"
              alt="menu"
              className="menu-btn"
              onClick={toggleMenu}
            />
            <section className="large-menu-items">
              <Link to="/" className="list-links">
                Home
              </Link>

              <Link to="/about" className="list-links">
                About Me
              </Link>

              <Link to="/projects" className="list-links">
                Projects
              </Link>

              <Link to="/skills" className="list-links">
                Skills
              </Link>

              <Link to="/jobs" className="list-links">
                Education & Jobs
              </Link>
            </section>
          </aside>
        )}
      </div>
      {showMenu && <NavBar handleClose={handleClose} showMenu={showMenu} />}
    </header>
  );
}

export default Header;
