/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const skills = [
    { name: "Python Development", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Computer Vision", level: 90 },
    { name: "Data Analysis", level: 85 },
    { name: "Deep Learning", level: 85 },
    { name: "AI Model Deployment", level: 80 },
  ];

  const experience = [
    {
      role: "IT Executive (AI)",
      company: "Evyol Group",
      period: "Dec 2024 - Present",
      description: "Implementing AI-driven automation solutions in production and office workflows, developing computer vision systems for operational safety.",
    },
    {
      role: "IT Support",
      company: "MNS University of Agriculture",
      period: "Dec 2022 - Dec 2023",
      description: "Maintained computer lab systems, supported ERP/LMS implementation, and provided technical assistance to faculty and students.",
    },
    {
      role: "Freelance Data Scientist",
      company: "Upwork & Fiverr",
      period: "Jan 2022 - Present",
      description: "Delivered end-to-end data solutions including AI models, data analysis, and visualization for international clients.",
    },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>01.</span> About Me
          </h2>
          <div className={styles.titleLine}></div>
        </motion.div>

        <div className={styles.contentWrapper}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.aboutText}
          >
            <p>
              Hello! I'm Jawad Ahmad, a passionate Data Scientist and Python Developer with expertise in building AI-powered solutions. My journey in technology began with a fascination for data and its potential to transform businesses and solve real-world problems.
            </p>

            <p>
              I specialize in developing computer vision systems, machine learning models, and data analytics pipelines. My work focuses on creating practical AI applications that deliver measurable impact, from automated detection systems to predictive analytics.
            </p>

            <p>
              When I'm not working on AI models, you can find me contributing to open-source projects, researching new techniques in deep learning, or mentoring aspiring data scientists. I believe in continuous learning to stay at the forefront of AI innovation.
            </p>

            <div className={styles.techList}>
              <h3 className={styles.listTitle}>Technologies I work with:</h3>
              <div className={styles.techColumns}>
                <ul className={styles.techColumn}>
                  <li>Python</li>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>OpenCV</li>
                  <li>YOLO</li>
                  <li>scikit-learn</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>FastAPI</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>Flask</li>
                  <li>Power BI</li>
                  <li>Tableau</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Git</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>Streamlit</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.profileWrapper}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay}></div>
              <img
                src="/images/jawad-about.jpg"
                alt="Jawad Ahmad"
                className={styles.profileImage}
                loading="lazy"
              />
              <div className={styles.imageBorder}></div>
            </div>
          </motion.div>
        </div>

        <div className={styles.skillsExperienceWrapper}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.skillsSection}
          >
            <h3 className={styles.subsectionTitle}>My Skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={styles.skillProgress}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className={styles.experienceSection}
          >
            <h3 className={styles.subsectionTitle}>Professional Journey</h3>
            <div className={styles.timeline}>
              {experience.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineRole}>{exp.role}</h4>
                    <div className={styles.timelineMeta}>
                      <span className={styles.timelineCompany}>
                        {exp.company}
                      </span>
                      <span className={styles.timelinePeriod}>
                        {exp.period}
                      </span>
                    </div>
                    <p className={styles.timelineDescription}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;