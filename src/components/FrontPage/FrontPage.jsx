import { Link } from "react-router-dom";
import "../FrontPage/FrontPage.css";
import LinkButtons from "../LinkButtons/LinkButtons";
import profilePic from "../../Assets/profilepic.jpeg";

function FrontPage() {
  return (
    <div className="profile">
      <section className="profile-area">
        <img src={profilePic} alt="profile" className="profile-pic" />
        <div className="profile-info">
          <h2 className="intro">Hello, My Name is Andriana Saffo</h2>
          <p>Full time mum, Coding enthusiast</p>
          <aside className="btn-info">
            <Link to="/about">
              <LinkButtons name="About me" />
            </Link>
            <Link to="/projects">
              <LinkButtons name="Technical Projects" />
            </Link>
            <Link to="/skills">
              <LinkButtons name="Skills" />
            </Link>
            <Link to="/jobs">
              <LinkButtons name="Employment" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default FrontPage;
