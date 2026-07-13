type Project = {
  id: number;
  title: string;
  description: string;
  tech: string;
  github: string;
  live: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {

  function openGithub() {
    window.open(project.github, "_blank");
  }

  function openLive() {
    window.open(project.live, "_blank");
  }

  return (
    <div className="card">

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <strong>{project.tech}</strong>

      <br /><br />

      <button onClick={openLive}>
        Live Demo
      </button>

      <button onClick={openGithub}>
        GitHub
      </button>

    </div>
  );
}

export default ProjectCard;