import Link from "next/link";
import { FilePdf, GithubLogo, LinkedinLogo } from "phosphor-react";
import { useEffect, useState } from "react";

interface NavigationProps {
  links: {
    github: string;
    linkedin: string;
  };
  handleNavClick: (e: React.MouseEvent, id: string) => void;
  downloadCV: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ links, handleNavClick, downloadCV }) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <Link href="/">
                <span>V<span className="highlight">K</span></span>
              </Link>
            </div>
            
            <div className="nav-links">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, 'work-experience')}>Experience</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </div>
            
            <div className="nav-actions">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <GithubLogo size={20} weight="fill" />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <LinkedinLogo size={20} weight="fill" />
              </a>
              <button 
                onClick={() => window.open("https://drive.google.com/file/d/1miU5jzq4Cjk83tDmtqPohFpwpFNnKSKo/view?usp=sharing")} 
                type="button" 
                className="resume-btn"
                style={{ cursor: 'pointer', position: 'relative', zIndex: 1001 }}
              >
                Resume <FilePdf size={16} />
              </button>
            </div>
            
            <button className="menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
