import LinkButtons from "./LinkButtons";

function FrontPage() {
  return (
    <div className="profile">
      <section className="profile-area">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHhwONn-rxiEw/profile-displayphoto-shrink_800_800/0/1554392197343?e=1688601600&v=beta&t=7Qowi0rJNGEvody47J5XsUWfdwu7FuZ3Q1W5Ki_sl80"
          alt="profile"
          className="profile-pic"
        />
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
