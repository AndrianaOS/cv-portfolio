import LinkButtons from "./LinkButtons";
// import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="profile">
      <section className="profile-area">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHhwONn-rxiEw/profile-displayphoto-shrink_800_800/0/1554392197343?e=1688601600&v=beta&t=7Qowi0rJNGEvody47J5XsUWfdwu7FuZ3Q1W5Ki_sl80"
          alt="profile"
          className="profile-pic"
        />
        <h2 className="intro">Hello, My Name is Andriana Saffo</h2>
        <p>Full time mum, Coding enthusiast</p>
        <aside className="btn-info">
          <LinkButtons name="About me" />
          <LinkButtons name="Technical Projects" />
          <LinkButtons name="Skills" />
          <LinkButtons name="Employment" />
        </aside>
        {/* <aside className="btn-info">
          <Link to="/about">
            <LinkButtons name="About me" />
          </Link>
          <Link to="/projects">
            <LinkButtons name="Technical Projects" />
          </Link>
          <Link to="/skills">
            <LinkButtons name="Skills" />
          </Link>
          <Link to="/employment">
            <LinkButtons name="Employment" />
          </Link>
        </aside> */}
      </section>
    </div>
  );
}

export default FrontPage;
