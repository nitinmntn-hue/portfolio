import "../styles/about.scss";

const About = () => {
  const skills = ["React", "SCSS", "Tailwind", "Node.js", "JavaScript"];

  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        I'm passionate about creating interactive and scalable web applications.
      </p>

      <h3>Skills</h3>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
