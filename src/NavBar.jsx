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
        <a href="/home" className="list-item">
          Home
        </a>
      </section>
    </nav>
  );
}

export default NavBar;
