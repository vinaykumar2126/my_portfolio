import styles from './experience.module.scss'
import { Expriences } from '@/objects'
import { BriefcaseMetal } from 'phosphor-react';
import { WorkItem } from './WorkItem';

interface Experience {
  logo: string;
  companyName: string;
  date: string;
  position: string;
  skills: string;
  workFrom: string;
  link: string;
}

const WorkExperience = () => {
  return (
    <section className={styles.work_experience_section} id="work-experience">
      <div className={styles.background_particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
      
      <div className="container">
        <div className={styles.section_header}>
          <BriefcaseMetal size={48} weight="duotone" className={styles.section_icon} />
          <h2 className={styles.section_title}>Professional Experience</h2>
          <div className={styles.section_underline}></div>
          <p className={styles.section_subtitle}>My journey in the tech industry</p>
        </div>
        
        <div className={styles.timeline_container}>
          <div className={styles.timeline_line}></div>
          
          <div className={styles.work_items_container}>
            {Expriences.map((experience, index) => (
              <WorkItem 
                key={index} 
                experience={experience} 
                isOdd={index % 2 === 0}
                delay={index * 0.2} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { WorkExperience }