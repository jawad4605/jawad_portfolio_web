import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaChevronDown, FaTimes, FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if the current route matches the nav link
  const isActive = (path) => {
    return router.pathname === path || 
           (path !== '/' && router.pathname.startsWith(path));
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <img src='/images/logo.png' alt="Usama Hanif Logo" className={styles.logo} />
        </Link>
      </div>
      
      <nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.navList}>
          <li>
            <Link 
              href="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`} 
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`} 
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`} 
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/portfolio" 
              className={`${styles.navLink} ${isActive('/portfolio') ? styles.active : ''}`} 
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`} 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <Link href="/contact" className={styles.mobileBtn} onClick={() => setMenuOpen(false)}>
          Get Free Proposal
        </Link>
      </nav>
      
      <Link href="/contact" className={styles.desktopBtn}>
        Get Free Proposal
      </Link>
      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className={styles.closeIcon} />
        ) : (
          <FaBars className={styles.hamburgerIcon} />
        )}
      </div>
    </header>
  );
};

export default Header;