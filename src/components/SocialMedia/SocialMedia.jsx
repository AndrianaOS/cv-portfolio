import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";

function SocialMedia() {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/andriana-saffo/" className="linkedin">
        <img src={linkedin} alt="linkedIn" />
      </a>
      <a href="https://github.com/AndrianaOS" className="github">
        <img src={github} alt="github" />
      </a>
    </div>
  );
}

export default SocialMedia;
