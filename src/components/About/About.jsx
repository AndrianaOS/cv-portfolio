import "../About/About.css";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <section className="info">
        <p>
          I am a full time mum currently enrolled in an intensive software
          development course that I organize around my child's needs.
        </p>
        <p>
          I have always been fascinated by coding and my journey of learning to
          code began during lockdown. I learnt HTML and CSS by myself and fell
          in love with being able to build something that I can instantly see
          the results of. I attempted to build a frontend webpage and realized I
          needed to learn more to improve the skills I had began to learn.
          Additionally I learnt JavaScript, React, Node.JS and SQL through the
          bootcamp.
        </p>
        <p>
          I have an interest in learning new things and developing my skills and
          knowledge. Using the skills and knowledge I have acquired so far, i
          have built a number of webpages ranging from frontend projects to full
          stack projects.
        </p>
        <p>
          I have a background in the financial sector as well a degree in
          Forensic Science.
        </p>
      </section>
      <a href="/" className="list-item">
        Back
      </a>
    </div>
  );
}

export default About;
