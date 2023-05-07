import "animate.css";

function NavBar(props) {
  return (
    <nav
      // .showMenu={props.showMenu}
      className="nav-menu animate__animated
      animate__bounceInDown"
    >
      <section className="close">
        <img
          src="close.png"
          alt="close"
          className="close-btn"
          onClick={props.handleClose}
        />
      </section>
      <section className="menu-items ">
        <a href="/" className="list-item">
          Home
        </a>
        <a href="/about" className="list-item">
          About Me
        </a>
        <a href="/projects" className="list-item">
          Projects
        </a>
        <a href="/skills" className="list-item">
          Skills
        </a>
        <a href="/jobs" className="list-item">
          Employment
        </a>
      </section>
    </nav>
  );
}

//  <Route path="/" element={<FrontPage />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/skills" element={<Skills />} />
//       <Route path="/jobs" element={<Jobs />} />

export default NavBar;
