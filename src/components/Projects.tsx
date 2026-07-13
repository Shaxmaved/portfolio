import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (

    <section className="about">

      <h2>Projects</h2>

      <div className="about-grid">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

    </section>

  );

}

export default Projects;