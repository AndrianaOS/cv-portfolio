import "../NavBar/NavBar.css";
import "animate.css";

function NavBar(props) {
  return (
    <nav
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

export default NavBar;
