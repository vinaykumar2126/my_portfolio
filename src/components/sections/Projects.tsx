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

// Define the project interface to match exactly what ProjectCard expects
interface ProjectItem {
  image: string;
  title: string;
  tech: string[];
  description: string;
  date: string; // Make date required to match ProjectCard's expectations
  status: string;
  github: string;
  demo: string;
}

const Projects: React.FC<ProjectsProps> = ({ links }) => {
  const projects: ProjectItem[] = [
    {
      image: "/assets/portfolio.png",
      title: "My Portfolio",
      tech: ["Next.js", "TypeScript", "SCSS"],
      description: "A personal portfolio website built with modern web technologies to showcase my skills, experience, and projects using responsive design principles.",
      date: "2023", // Make date required
      status: "completed",
      github: links.project1, // Changed from links.github to links.project1
      demo: links.project1
    },
    {
      image: "/assets/ipl.png",
      title: "Ipl-Auction",
      tech: ["Node.js", "MongoDB", "React"],
      description: "Designed a sophisticated MERN Stack application simulating the dynamics of an IPL auction, featuring a user-friendly interface and robust backend architecture.",
      date: "2022", // Make date required
      status: "completed",
      github: links.project2, // Changed from links.github to links.project2
      demo: links.project2
    },
    {
      image: "/assets/resumai.png",
      title: "AI Powered Resume Evaluator",
      tech: ["Node.js", "MongoDB", "Next.js"],
      description: "Showcased a full-stack application offering personalized feedback, scoring, and suggestions to help users optimize their resumes for job applications.",
      date: "2023", // Make date required
      status: "Completed and Live",
      github: links.project3, // Changed from links.github to links.project3
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
          {/* <button className="category-btn">Web App</button>
          <button className="category-btn">Mobile</button>
          <button className="category-btn">API</button> */}
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
