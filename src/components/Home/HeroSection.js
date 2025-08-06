/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const services = [
    "Data Scientist",
    "Python Developer",
    "Data Analyst",
    "Computer Vision Engineer",
    "AI Solutions Developer",
    "Machine Learning Specialist",
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const serviceIntervalRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const rotateServices = () => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    };

    serviceIntervalRef.current = setInterval(rotateServices, 2500);

    return () => {
      clearInterval(serviceIntervalRef.current);
    };
  }, []);

  // Parallax effect for profile image
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!profileRef.current) return;

      const { left, top, width, height } = profileRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      profileRef.current.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * 10}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.introText}>
          <span className={styles.greeting}>Hello, I am</span>
          <h1 className={styles.name}>
            Jawad <span className={styles.nameHighlight}>Ahmad</span>
          </h1>

          <div className={styles.titleWrapper}>
            <span className={styles.title}>Professional</span>
            <div className={styles.servicesSlider}>
              {services.map((service, index) => (
                <span
                  key={service}
                  className={`${styles.service} ${index === currentServiceIndex ? styles.active : ""
                    }`}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <p className={styles.description}>
            I design and deploy AI-powered solutions that transform businesses through computer vision, machine learning, and data analytics. Specializing in Python, TensorFlow, and PyTorch, I build intelligent systems—from real-time object detection (YOLO, OpenCV) to predictive models and automated workflows. My expertise spans full-cycle AI development, integrating scalable solutions with APIs for seamless deployment. Passionate about turning data into actionable insights, I create impactful applications in precision agriculture, automation, and beyond
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/portfolio" className={styles.primaryButton}>
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0V16M16 8L0 8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Link>

            <Link href="/contact" className={styles.secondaryButton}>
              <span>Contact Me</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 4L8 9L15 4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </div>

          <div className={styles.techStack}>
            <div className={styles.techLabel}>Tech Stack</div>
            <div className={styles.techIcons}>
              <div className={styles.techRow}>
                <span className={styles.techItem}>Python</span>
                <span className={styles.techItem}>TensorFlow</span>
                <span className={styles.techItem}>PyTorch</span>
                <span className={styles.techItem}>OpenCV</span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.techItem}>YOLO</span>
                <span className={styles.techItem}>Pandas</span>
                <span className={styles.techItem}>NumPy</span>
                <span className={styles.techItem}>scikit-learn</span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.techItem}>FastAPI</span>
                <span className={styles.techItem}>Flask</span>
                <span className={styles.techItem}>Power BI</span>
                <span className={styles.techItem}>Tableau</span>
                <span className={styles.techItem}>AWS</span>
              </div>
              <div className={styles.techRow}>
                <span className={styles.techItem}>SQL</span>
                <span className={styles.techItem}>Docker</span>
                <span className={styles.techItem}>Git</span>
                <span className={styles.techItem}>Linux</span>
                <span className={styles.techItem}>Streamlit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.profileWrapper}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        ref={profileRef}
      >
        <div className={styles.profileBackground}></div>
        <div className={styles.codeSnippet}></div>
        <div className={styles.profileImageContainer}>
          <img
            src="/images/mypic2.jpg"
            alt="Jawad Ahmad - Data Scientist"
            className={styles.profileImage}
            loading="eager"
          />
        </div>
        <div className={`${styles.profileHighlight} ${isHovering ? styles.hover : ''}`}></div>

        <div className={styles.socialLinks}>
          <Link
            href="https://github.com/jawad4605"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jawad-ahmad-23785928a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;