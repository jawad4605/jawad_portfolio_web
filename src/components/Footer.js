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
              <a href="https://www.upwork.com/freelancers/~01a0f6706306d9fb3a" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
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