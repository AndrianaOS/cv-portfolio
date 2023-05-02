import { useState } from "react";
import NavBar from "./NavBar";

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
              <a href="/home" className="list-item">
                Home
              </a>
            </section>
          </aside>
        )}
      </div>
      {showMenu && <NavBar handleClose={handleClose} showMenu={showMenu} />}
    </header>
  );
}

export default Header;
