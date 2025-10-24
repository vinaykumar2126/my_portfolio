import { contact, links } from '@/objects';
import { Footer } from "@/components/layout/Footer";
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { WorkExperience } from '@/components/work';
// import { debugOverlays } from '@/utils/debugHelper'; // Uncomment for debugging

export default function Home() {
  const { name, profesion } = contact;
  
  // Handle navigation link clicks
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = id;
    }
  };
  
  // Download CV function - modified to force download with fallback
  const downloadCV = () => {
    // First try direct fetch
    fetch('/assets/!Resume_Vinay.pdf')
      .then(response => {
        response.blob().then(blob => {
          // Create a blob URL and trigger download
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Vinay_Kumar_Resume.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
      })
      .catch(() => {
        // Fallback to window.open
        window.open('/assets/resume.pdf', '_blank');
      });
  };

  // Uncomment for debugging
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     debugOverlays();
  //   }
  // }, []);

  return (
    <>
      <Navigation 
        links={links} 
        handleNavClick={handleNavClick} 
        downloadCV={downloadCV} 
      />
      
      <Hero 
        name={name} 
        profession={profesion} 
        handleNavClick={handleNavClick} 
        downloadCV={downloadCV} 
      />
      
      <main>
        <About handleNavClick={handleNavClick} />
        <Skills />
        <WorkExperience />
        <Projects links={links} />
        <Contact links={links} />
      </main>

      <Footer />
    </>
  );
}