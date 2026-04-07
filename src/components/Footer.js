/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerAbout}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logoLink}>
                <img src='/images/logo.png' alt="Jawad Ahmad" className={styles.logo} />
              </Link>
            </div>
            <p className={styles.aboutText}>
              AI product builder and full-stack developer. I design, build, and deploy intelligent web applications that serve real users at scale.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/jawad4605" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className={styles.socialIcon} />
              </a>
              <a href="https://www.linkedin.com/in/jawad-ahmad-23785928a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3 className={styles.linksTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>About</Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.footerLink}>Projects</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerServices}>
            <h3 className={styles.linksTitle}>Services</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/services/ai-web-application-development" className={styles.footerLink}>AI Web App Development</Link>
              </li>
              <li>
                <Link href="/services/machine-learning-development" className={styles.footerLink}>Machine Learning</Link>
              </li>
              <li>
                <Link href="/services/computer-vision-systems" className={styles.footerLink}>Computer Vision</Link>
              </li>
              <li>
                <Link href="/services/ai-integration" className={styles.footerLink}>AI System Integration</Link>
              </li>
              <li>
                <Link href="/services/cloud-ai-solutions" className={styles.footerLink}>Cloud AI Deployment</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h3 className={styles.linksTitle}>Get In Touch</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:jawad.ahmad4605@gmail.com" className={styles.contactLink}>jawad.ahmad4605@gmail.com</a>
              </li>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+923209641408" className={styles.contactLink}>+92 320 964 1408</a>
              </li>
            </ul>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Me
            </Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Jawad Ahmad. All rights reserved.
          </div>
          {/* <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.legalLink}>Terms of Service</Link>
          </div> */}
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            <FiArrowUp className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;