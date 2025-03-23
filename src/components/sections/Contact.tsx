import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useState, useEffect, useRef } from "react";
// Import as a CSS module
import styles from "../../styles/contact.module.css";

interface ContactProps {
  links: {
    github: string;
    linkedin: string;
  }
}

// Animated Avatar component
const AnimatedAvatar: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isWaving, setIsWaving] = useState(true); // Start with waving
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true); // Start with speaking
  const [message, setMessage] = useState("Hi there! I'm Vinay's virtual assistant!");
  const avatarRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement to track eye position
  useEffect(() => {
    // Start with initial animation
    setTimeout(() => {
      setIsSpeaking(false);
    }, 3000);
    
    setTimeout(() => {
      setIsWaving(false);
    }, 1500);
    
    // Auto-animate occasionally even without interaction
    const autoAnimateInterval = setInterval(() => {
      const animations = [
        () => {
          setIsWaving(true);
          setTimeout(() => setIsWaving(false), 1500);
        },
        () => {
          setIsSpeaking(true);
          setMessage("Feel free to contact me via email or LinkedIn!");
          setTimeout(() => setIsSpeaking(false), 3000);
        },
        () => {
          setIsSpeaking(true);
          setMessage("Check out my projects on GitHub!");
          setTimeout(() => setIsSpeaking(false), 3000);
        },
        () => {
          setIsSpeaking(true);
          setMessage("Looking for a Passionate Developer you found one!");
          setTimeout(() => setIsSpeaking(false), 3000);
        }
      ];
      
      // Randomly select an animation
      animations[Math.floor(Math.random() * animations.length)]();
    }, 10000); // Run auto-animation every 10 seconds
    
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const avatarRect = avatarRef.current.getBoundingClientRect();
        const avatarCenterX = avatarRect.left + avatarRect.width / 2;
        const avatarCenterY = avatarRect.top + avatarRect.height / 2;
        
        // Calculate direction from avatar center to mouse position
        const deltaX = e.clientX - avatarCenterX;
        const deltaY = e.clientY - avatarCenterY;
        
        // Normalize to a smaller range for subtle eye movements
        const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;
        const normalizedX = Math.min(Math.max(deltaX / maxDistance, -1), 1) * 5;
        const normalizedY = Math.min(Math.max(deltaY / maxDistance, -1), 1) * 5;
        
        setEyePosition({ x: normalizedX, y: normalizedY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Random blinking
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 3000 + 2000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
      clearInterval(autoAnimateInterval);
    };
  }, []);

  // Handle click interactions
  const handleClick = () => {
    const messages = [
      "Thanks for clicking! Feel free to contact me via email!",
      "I'd love to connect with you on LinkedIn!",
      "Check out my projects on GitHub!",
      "I'm currently looking for new opportunities!",
      "Let's build something amazing together!",
      "Looking for a Passionate Developer you found one!"
    ];
    
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setIsSpeaking(true);
    
    setTimeout(() => {
      setIsSpeaking(false);
    }, 3000);
    
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1500);
  };

  return (
    <div className={styles["avatar-container"]} ref={avatarRef} onClick={handleClick}>
      {/* Speech bubble */}
      <div className={`${styles["avatar-speech-bubble"]} ${isSpeaking ? styles.speaking : ''}`}>
        <p>{message}</p>
      </div>
      
      {/* Avatar illustration */}
      <div className={styles["avatar-illustration"]}>
        <div className={styles["avatar-head"]}>
          {/* Eyes */}
          <div className={styles["avatar-eyes"]}>
            <div 
              className={`${styles["avatar-eye"]} ${isBlinking ? styles.blinking : ''}`}
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
              }}
            >
              <div className={styles["avatar-pupil"]}></div>
            </div>
            <div 
              className={`${styles["avatar-eye"]} ${isBlinking ? styles.blinking : ''}`}
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
              }}
            >
              <div className={styles["avatar-pupil"]}></div>
            </div>
          </div>
          
          {/* Mouth */}
          <div className={`${styles["avatar-mouth"]} ${isSpeaking ? styles.speaking : ''}`}></div>
        </div>
        
        {/* Body */}
        <div className={styles["avatar-body"]}>
          <div className={`${styles["avatar-arm"]} ${styles["avatar-left-arm"]} ${isWaving ? styles.waving : ''}`}></div>
          <div className={`${styles["avatar-arm"]} ${styles["avatar-right-arm"]}`}></div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC<ContactProps> = ({ links }) => {
  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Let's Get in touch</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>
              Feel free to reach out to me for collaboration or just a chat about 
              technology. I'm always open to new opportunities and connections.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a>gvk.kumar100@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a>+16073491474</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>New York, United States</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <GithubLogo size={20} weight="fill" />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedinLogo size={20} weight="fill" />
              </a>
            </div>
          </div>
          
          {/* Replacing the contact form with an animated avatar */}
          <div className={styles["avatar-wrapper"]}>
            <AnimatedAvatar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
