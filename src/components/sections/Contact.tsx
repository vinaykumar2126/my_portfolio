import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useState } from "react";

interface ContactProps {
  links: {
    github: string;
    linkedin: string;
  }
}

const Contact: React.FC<ContactProps> = ({ links }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError(false);
    
    // Store form reference to use later
    const form = e.currentTarget;
    
    // Get form data
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    
    try {
      // Send data to our simple server
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formProps),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitMessage("Thank you for your message! I'll get back to you soon.");
        form.reset();
      } else {
        setSubmitError(true);
        setSubmitMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      
      // If the email was likely sent but we got a network error
      // Show a success message with a note about potential issues
      setSubmitMessage("Your message was probably sent, but there was a connection issue. If you don't hear back, please try contacting me directly via email.");
      setSubmitError(false);
      
      // Safely reset the form using the stored reference
      try {
        form.reset();
      } catch (resetError) {
        console.error("Could not reset form:", resetError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <a href="mailto:vgodavarti@gmail.com">gvk.kumar100@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">Available on request</a>
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
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your message" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`form-message ${submitError ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
