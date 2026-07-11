type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="card">
      {icon}

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default SkillCard;
