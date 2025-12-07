import Buttons from "../components/Buttons";
import "../styles/about.scss";

const About = () => {
  const skills = ["React", "SCSS", "Tailwind", "Node.js", "JavaScript"];

  return (
    <section className="">

      <div className="about">
        <h2>About Me</h2>
        <p>
          I'm passionate about creating interactive and scalable web applications.
        </p>

        <h3>Skills</h3>

        <div className="skills">
          <h2>Front-End Skills</h2>
          <ul className="skill front">
            {skills.map((skill, index) => (
              <li key={index}>
                <Buttons text={skill} variant="accent" />
              </li>
            ))}
          </ul>
          <h2>Back-End Skills</h2>
          <ul className="skill back">
            {skills.map((skill, index) => (
              <li key={index}>
                <Buttons text={skill} variant="primary" />
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}

export default About;
