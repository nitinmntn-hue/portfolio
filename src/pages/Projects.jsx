import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/about.scss";
import Buttons from "../components/Buttons.jsx";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>

      <Buttons text="View"/>
      <Buttons text="Dark Button" variant="dark"/>
      <Buttons text="Accent Button" variant="accent"/>
      <Buttons text="Primary Button" variant="primary"/>
    </section>
  );
}

export default Projects;
