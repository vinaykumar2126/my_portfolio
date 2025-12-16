import Image from "next/image";

interface AboutProps {
  handleNavClick: (e: React.MouseEvent, id: string) => void;
}

const About: React.FC<AboutProps> = ({ handleNavClick }) => {
  return (
    <section className="section section-about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">My introduction</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <Image 
                src="/assets/banner3.jpg"
                alt="About Me"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          
          <div className="about-text">
            <p>
              The curiosity to understand the technology gears was the beginning. 
              I started with Java and never stopped! I love facing new challenges 
              because they teach and strengthen me.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">Craftman</div>
                <div className="stat-label">Seeking new opportunities</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number highlight">100%</div>
                <div className="stat-label">Committed to learning</div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="btn btn-secondary"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
