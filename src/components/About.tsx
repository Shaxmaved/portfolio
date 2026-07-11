import "../styles/about.css";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";



function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <div className="about-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
           />
        ))}
      </div>
    </section>
  );
}

export default About;