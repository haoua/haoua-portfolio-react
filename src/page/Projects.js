import projectsData from "../data/projets.json";
import Project from "../parts/Project";

export default function Projects() {
  return (
    <div>
      <h1>Projets</h1>
      <ul>
        <li>PHP</li>
        <li>CSS</li>
        <li>React</li>
      </ul>

      {projectsData.projets.map((project) => {
        return <Project projetInfo={project} />;
      })}
    </div>
  );
}
