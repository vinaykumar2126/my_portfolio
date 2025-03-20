import Link from 'next/link';
import Image from 'next/image';
import styles from './experience.module.scss';
import { ArrowSquareOut, CalendarBlank, MapPin } from 'phosphor-react';
import { useEffect, useState, useRef } from 'react';

interface ExperienceProps {
  experience: {
    logo: string;
    companyName: string;
    date: string;
    position: string;
    skills: string;
    workFrom: string;
    link: string;
  };
  isOdd: boolean;
  delay: number;
}

export const WorkItem = ({ experience, isOdd, delay }: ExperienceProps) => {
  const { logo, companyName, date, position, skills, workFrom, link } = experience;
  const [visible, setVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation with setTimeout
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={`${styles.work_item_container} ${visible ? styles.visible : ''} ${isOdd ? styles.left : styles.right}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.timeline_dot}></div>
      
      <div className={styles.work_item}>
        <div className={styles.work_item_inner}>
          <div className={styles.work_header}>
            <div className={styles.company_logo_wrapper}>
              <Image 
                width={80} 
                height={80} 
                src={logo} 
                alt={companyName}
                className={styles.company_logo}
              />
            </div>
            
            <div className={styles.company_info}>
              <h3 className={styles.company_name}>{companyName}</h3>
              <div className={styles.date_location}>
                <span className={styles.date}>
                  <CalendarBlank weight="bold" size={16} />
                  {date}
                </span>
                <span className={styles.location}>
                  <MapPin weight="bold" size={16} />
                  {workFrom}
                </span>
              </div>
            </div>
          </div>
          
          <h4 className={styles.position_title}>{position}</h4>
          
          <div className={styles.skills_container}>
            {skills.split(',').map((skill, index) => (
              <span key={index} className={styles.skill_tag}>
                {skill.trim()}
              </span>
            ))}
          </div>
          
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.view_project_btn}
          >
            Visit <ArrowSquareOut size={18} weight="bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};
