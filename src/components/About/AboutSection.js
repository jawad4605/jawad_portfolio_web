/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const skills = [
    { name: "AI Product Development", level: 95 },
    { name: "Python and Machine Learning", level: 92 },
    { name: "Full-Stack Web (Next.js, React)", level: 88 },
    { name: "Computer Vision", level: 90 },
    { name: "Firebase and Cloud Deployment", level: 85 },
    { name: "Data Analysis and Visualization", level: 83 },
  ];

  const experience = [
    {
      role: "AI Product Builder",
      company: "VierOMind",
      period: "Oct 2025 - Present",
      description: "Building and launching AI-powered web products across mental health, e-commerce, document processing, and file conversion. Responsible for full-stack development, AI integration, and cloud deployment.",
    },
    {
      role: "IT Executive (AI)",
      company: "Evyol Group",
      period: "Dec 2024 - Oct 2025",
      description: "Implemented AI-driven automation solutions in production and office workflows, and developed computer vision systems for operational safety.",
    },
    {
      role: "IT Support",
      company: "MNS University of Agriculture",
      period: "Dec 2022 - Dec 2023",
      description: "Maintained computer lab systems, supported ERP/LMS implementation, and provided technical assistance to faculty and students.",
    },
    {
      role: "Freelance Data Scientist",
      company: "Upwork and Fiverr",
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
              Hello! I&apos;m Jawad Ahmad, an AI product builder and full-stack developer who ships real, production-grade applications. I do not just build models in notebooks. I take ideas from concept to deployed products that serve real users.
            </p>

            <p>
              My work spans the full product lifecycle: designing intelligent systems, integrating machine learning into web applications, and shipping them to production. I have built and launched multiple live platforms across mental health, e-commerce, document processing, and file conversion verticals.
            </p>

            <p>
              I work across the full stack: Python and machine learning on the backend, Next.js and React on the frontend, Firebase for real-time data, and cloud platforms for scalable deployment. I care about building things that work in production, not just in development.
            </p>

            <div className={styles.techList}>
              <h3 className={styles.listTitle}>Technologies I work with:</h3>
              <div className={styles.techColumns}>
                <ul className={styles.techColumn}>
                  <li>Python</li>
                  <li>Next.js</li>
                  <li>React</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>Firebase</li>
                  <li>Node.js</li>
                  <li>FastAPI</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>OpenCV</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>YOLO</li>
                  <li>scikit-learn</li>
                  <li>Pandas</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>AWS</li>
                  <li>Vercel</li>
                  <li>Docker</li>
                </ul>
                <ul className={styles.techColumn}>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>Git</li>
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