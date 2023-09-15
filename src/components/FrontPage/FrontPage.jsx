import { Link } from "react-router-dom";
import "../FrontPage/FrontPage.css";
import LinkButtons from "../LinkButtons/LinkButtons";
import profilePic from "../../Assets/profilepic.jpeg";
import buttonNames from "../../Utilities/buttonInfo";

function FrontPage() {
  return (
    <div className="profile">
      <section className="profile-area">
        <img src={profilePic} alt="profile" className="profile-pic" />
        <div className="profile-info">
          <h2 className="intro">Hello, My Name is Andriana Saffo</h2>
          <details>
            <summary className="intro describe">I'm a ...</summary>
            <ul>
              <li>Full time mum</li>
              <li>Coding enthusiast</li>
              <li>Forensic Science Graduate</li>
              <li>Product Management trainee</li>
              <li>Career Switcher</li>
              <li>Mentor</li>
            </ul>
          </details>
          <aside className="btn-info">
            {buttonNames.map((eachButton) => {
              return (
                <Link
                  to={eachButton.linkTo}
                  key={eachButton.id}
                  id={eachButton.id}
                >
                  <LinkButtons name={eachButton.name} />
                </Link>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1eBI7TdwmdyuvSRVyETdUoFXXezqwGuGB/view?usp=sharing"
              id="view"
              target="_blank"
              rel="noreferrer"
            >
              <button className="link-btn">View CV</button>
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default FrontPage;
