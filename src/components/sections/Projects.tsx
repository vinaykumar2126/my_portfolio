import { ArrowRight } from "phosphor-react";
import ProjectCard from "../ui/ProjectCard";

interface ProjectsProps {
  links: {
    github: string;
    project1: string;
    project2: string;
    project3: string;
  }
}

const Projects: React.FC<ProjectsProps> = ({ links }) => {
  const projects = [
    {
      image: "/assets/project1.jpg",
      title: "My Portfolio",
      tech: ["Next.js", "TypeScript", "SCSS"],
      description: "A personal portfolio website built with modern web technologies to showcase my skills, experience, and projects using responsive design principles.",
      date: "2023",
      status: "completed",
      github: links.github,
      demo: links.project1
    },
    {
      image: "/assets/project2.jpg",
      title: "Bartenders Website",
      tech: ["Node.js", "MongoDB", "React"],
      description: "A full-stack application for bartenders to manage recipes, inventory, and showcase their skills with recipe creation and sharing functionality.",
      date: "2022",
      status: "completed",
      github: links.github,
      demo: links.project2
    },
    {
      image: "/assets/project3.jpg",
      title: "Burger Management System",
      tech: ["Node.js", "MongoDB", "Vue.js"],
      description: "An order management system for a burger restaurant with real-time updates, inventory tracking, and kitchen display system for efficient order processing.",
      date: "2023",
      status: "in-progress",
      github: links.github,
      demo: links.project3
    }
  ];

  return (
    <section className="section section-projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Explore my recent work and personal projects</p>
        </div>
        
        <div className="project-categories">
          <button className="category-btn active">All</button>
          <button className="category-btn">Web App</button>
          <button className="category-btn">Mobile</button>
          <button className="category-btn">API</button>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="section-actions">
          <a href={links.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View All Projects <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
