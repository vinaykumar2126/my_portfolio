import Image from "next/image";
import SkillCard from "../ui/SkillCard";

const Skills = () => {
  const skills = [
    {
      icon: "/assets/nodejs.png",
      title: "Backend",
      description: "Node.js, Express, RESTful APIs, GraphQL"
    },
    {
      icon: "/assets/prisma.png",
      title: "Database ORM",
      description: "Prisma, Mongoose, Type-safe database access"
    },
    {
      icon: "/assets/mongodb.png",
      title: "Database",
      description: "MongoDB, NoSQL solutions, Data modeling"
    },
    {
      icon: "/assets/nextjs.png",
      title: "Frontend",
      description: "React, Next.js, TypeScript, Responsive design"
    }
  ];

  const additionalSkills = [
    "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Testing"
  ];

  return (
    <section className="section section-skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
        
        <div className="additional-skills">
          <h4>Additional Technologies</h4>
          <div className="skills-tags">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
