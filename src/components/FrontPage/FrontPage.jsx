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
            <a href="/about">
              <LinkButtons name="About me" />
            </a>
            <a href="/projects">
              <LinkButtons name="Technical Projects" />
            </a>
            <a href="/skills">
              <LinkButtons name="Skills" />
            </a>
            <a href="/jobs">
              <LinkButtons name="Employment" />
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default FrontPage;
