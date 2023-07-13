import { Link } from "react-router-dom";
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
        <Link to="/" className="list-item">
          Home
        </Link>
        <Link to="/about" className="list-item">
          About Me
        </Link>
        <Link to="/projects" className="list-item">
          Projects
        </Link>
        <Link to="/skills" className="list-item">
          Skills
        </Link>
        <Link to="/jobs" className="list-item">
          Education & Jobs
        </Link>
      </section>
    </nav>
  );
}

export default NavBar;
