import Image from "next/image";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <Image src={icon} alt={title} width={60} height={60} />
      </div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};

export default SkillCard;
