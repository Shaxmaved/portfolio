
type Skill = {
  id: number;
  icon: any;
  title: string;
  description: string;
  level: string;
};

type SkillCardProps = {
  skill: Skill;
};

function SkillCard({ skill }: SkillCardProps) {

  const Icon = skill.icon;

  return (
    <div className="card">

      <Icon className="card-icon" />

      <h3>{skill.title}</h3>

      <p>{skill.description}</p>

      <p>{skill.level}</p>

    </div>
  );
}

export default SkillCard;