import Image from "next/image";
import { GithubLogo, CalendarBlank } from "phosphor-react";

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    tech: string[];
    description: string;
    date: string;
    status: string;
    github: string;
    demo: string;
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image 
          src={project.image} 
          alt={project.title}
          width={600}
          height={400}
          style={{ objectFit: "cover" }}
        />
        <div className="project-links">
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
            <GithubLogo size={18} weight="bold" /> Source Code
          </a>
          <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-meta">
          <span className="project-date">
            <CalendarBlank size={16} /> {project.date}
          </span>
          <span className={`project-status ${project.status}`}>{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
