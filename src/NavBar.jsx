// import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav showMenu={props.showMenu} className="nav-menu">
      <section className="close">
        <img
          src="close.png"
          alt="close"
          className="close-btn"
          onClick={props.handleClose}
        />
      </section>
      <section className="menu-items">
        {/* <Link to="/" className="list-item">
          Home
        </Link> */}
        <a href="/" className="list-item">
          Home
        </a>
      </section>
    </nav>
  );
}

export default NavBar;
