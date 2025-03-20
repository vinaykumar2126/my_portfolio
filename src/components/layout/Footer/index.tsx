import Link from 'next/link';
import Image from 'next/image';
import { GithubLogo, LinkedinLogo, Code } from 'phosphor-react';
import styles from './footer.module.scss';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    { icon: <GithubLogo size={20} weight="fill" />, url: 'https://github.com/vinaykumar2126', label: 'GitHub' },
    { icon: <LinkedinLogo size={20} weight="fill" />, url: 'https://www.linkedin.com/in/vinay-kumar-godavarti/', label: 'LinkedIn' },
    { icon: <Code size={20} weight="fill" />, url: 'https://leetcode.com/u/vgodavarti/', label: 'LeetCode' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#header' },
    { label: 'About', href: '#section-about' },
    { label: 'Projects', href: '#section-companies' },
    { label: 'Contact', href: '#section-contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_top}>
          <div className={styles.footer_logo}>
            <Image 
              src="/assets/DSC_9962.png" 
              alt="Vinay Kumar Godavarti" 
              width={120} 
              height={120}
              className={styles.footer_avatar}
            />
          </div>
          
          <div className={styles.footer_content}>
            <div className={styles.footer_info}>
              <h3>Vinay Kumar Godavarti</h3>
              <p>Software Engineer & Full Stack Developer</p>
              
              <div className={styles.social_links}>
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={styles.social_link}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className={styles.footer_nav}>
              <h4>Quick Links</h4>
              <ul className={styles.footer_list}>
                {quickLinks.map((link, index) => (
                  <li key={index} className={styles.footer_item}>
                    <Link href={link.href} className={styles.footer_link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footer_bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Vinay Kumar Godavarti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
