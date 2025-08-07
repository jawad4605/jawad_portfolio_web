import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import ServicesGrid from "@/components/Services/ServicesGrid";
import styles from "@/components/Services/Services.module.css";

const ServicesPage = () => {
  return (
    <>
      <section className={styles.servicesPage}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              My <span className={styles.highlight}>Professional</span> Services
            </h1>
            <p className={styles.heroSubtitle}>
              Custom digital solutions designed to elevate your business
            </p>
          </div>
          <div className={styles.heroPattern}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTagline}>What I Offer</h2>
            <p className={styles.sectionDescription}>
              Comprehensive digital solutions from concept to deployment,
              crafted with attention to detail and focused on delivering real
              business value.
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
