import Image from "next/image";
import { FilePdf, CaretDown } from "phosphor-react";

interface HeroProps {
  name: string;
  profession: string;
  handleNavClick: (e: React.MouseEvent, id: string) => void;
  downloadCV: () => void;
}

const Hero: React.FC<HeroProps> = ({ name, profession, handleNavClick, downloadCV }) => {
  return (
    <header className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Hello, I'm</span>
              {name}
            </h1>
            <h2 className="hero-subtitle">{profession}</h2>
            <p className="hero-description">
              I build exceptional digital experiences with modern web technologies
            </p>
            
            <div className="hero-actions">
              <button 
                onClick={downloadCV} 
                type="button" 
                className="btn btn-primary"
                style={{ cursor: 'pointer', position: 'relative', zIndex: 10 }}
              >
                Download CV <FilePdf size={20} />
              </button>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="btn btn-outline"
                style={{ cursor: 'pointer', position: 'relative', zIndex: 10 }}
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-editor">
                <div className="code-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="filename">portfolio.js</span>
                </div>
                <div className="code-content">
                  <pre><code>
                    <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'} <br />
                      &nbsp;&nbsp;name: <span className="code-string">"{name}"</span>, <br />
                      &nbsp;&nbsp;role: <span className="code-string">"{profession}"</span>, <br />
                      &nbsp;&nbsp;skills: [<span className="code-string">"React"</span>, <span className="code-string">"NextJS"</span>, <span className="code-string">"NodeJS"</span>], <br />
                      &nbsp;&nbsp;passion: <span className="code-string">"Building digital experiences"</span> <br />
                    {'}'}; 
                  </code></pre>
                  <div className="cursor"></div>
                </div>
              </div>
              <div className="tech-orbit">
                <div className="tech-circle">
                  <Image src="/assets/nodejs.png" alt="Node.js" width={40} height={40} />
                </div>
                <div className="tech-circle">
                  <Image src="/assets/nextjs.png" alt="Next.js" width={40} height={40} />
                </div>
                <div className="tech-circle">
                  <Image src="/assets/mongodb.png" alt="MongoDB" width={40} height={40} />
                </div>
                <div className="tech-circle">
                  <Image src="/assets/prisma.png" alt="Prisma" width={40} height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="scroll-indicator">
          <span>Scroll Down</span>
          <CaretDown size={20} weight="bold" />
        </a>
      </div>
      
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
