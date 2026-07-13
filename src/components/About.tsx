import "../styles/about.css";
import { skills } from "../data/Skills";
import SkillCard from "./SkillCard";



function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <div className="about-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
        />
        ))}
      </div>
    </section>
  );
}

export default About;