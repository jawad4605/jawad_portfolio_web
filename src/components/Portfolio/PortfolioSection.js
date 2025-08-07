/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import styles from "./PortfolioSection.module.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: "Educational Platform",
      description:
        "An interactive learning management system with course creation, student tracking, and progress analytics.",
      category: "website",
      image: "/images/portfolio/website1.png",
      link: "https://drive.google.com/drive/folders/1BW5oJHDd778ssGx5Dk5QGlImMhJXqM3S?usp=sharing",
    },
    {
      id: 2,
      title: "Umrah Taxi Website",
      description:
        "Booking platform for Umrah transportation services with real-time scheduling and payment processing.",
      category: "website",
      image: "/images/portfolio/website2.png",
      link: "https://drive.google.com/drive/folders/1soZ0jvATRVZvN4HJ85MRe2mBHKU2i1oa?usp=sharing",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description:
        "Comprehensive medical dashboard for patient management, appointment scheduling, and health analytics.",
      category: "website",
      image: "/images/portfolio/website3.png",
      link: "https://drive.google.com/drive/folders/1UmYP7bAF-eWHDuh4yzyeb6EkzvQ-qYvU?usp=sharing",
    },
    {
      id: 4,
      title: "RAG GPT Implementation",
      description:
        "Custom Retrieval-Augmented Generation system for enhanced AI question answering capabilities.",
      category: "ai",
      image: "/images/portfolio/website4.png",
      link: "https://drive.google.com/drive/folders/1fuE7Ip5eKscjx7KLOxQSVn2syGI99aoS?usp=sharing",
    },
    {
      id: 5,
      title: "Medical AI Assistant",
      description:
        "Mobile application providing AI-powered medical diagnosis support and health recommendations.",
      category: "mobile",
      image: "/images/portfolio/mobileapp1.jpeg",
      link: "https://drive.google.com/drive/folders/1FBdZgRyP9VlcVN4-GS-8hbP1WrjrdAxY?usp=sharing",
    },
    {
      id: 6,
      title: "Weather Monitoring App",
      description:
        "Real-time weather forecasting application with location-based alerts and historical data analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp2.jpeg",
      link: "https://drive.google.com/drive/folders/1ZbxgHiOTyZvPCKrMQJhww-nBtCL1MTsL?usp=sharing",
    },
    {
      id: 7,
      title: "Weather Monitoring App 2",
      description:
        "Real-time weather forecasting application with location-based alerts and historical data analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp3.jpeg",
      link: "https://drive.google.com/drive/folders/1XEFMZGQdSaH7-My0HdN7t4RXZEKZ_lU4?usp=sharing",
    },
    {
      id: 8,
      title: "Umrah Cab Booking",
      description:
        "Complete booking system for Umrah transportation with driver management and route optimization.",
      category: "website",
      image: "/images/portfolio/website5.png",
      link: "https://drive.google.com/drive/folders/1K8LQv3YRiifQhQUEgRfFQTyI8Zyp6CrR?usp=sharing",
    },
    {
      id: 9,
      title: "Sales Tracking App",
      description:
        "Field sales monitoring application with GPS tracking, visit logging, and performance analytics.",
      category: "mobile",
      image: "/images/portfolio/mobileapp4.jpeg",
      link: "https://drive.google.com/drive/folders/1FnOEAqXktpNMbopkdy9X49WbZGGlMEtm?usp=sharing",
    },
    {
      id: 10,
      title: "Medical Lab Dashboard",
      description:
        "Comprehensive medical dashboard for patient report management and health analytics.",
      category: "website",
      image: "/images/portfolio/website6.png",
      link: "https://drive.google.com/drive/folders/1qoP2MpSos2iMC1lHTtrcc_qnGIvNDGcl?usp=sharing",
    },
    {
      id: 11,
      title: "Medical Certification Dashboard",
      description:
        "A comprehensive dashboard for managing patient certifications and health analytics.",
      category: "website",
      image: "/images/portfolio/website7.png",
      link: "https://drive.google.com/drive/folders/1X9m7u2bHLjonNQZC5qmoqQgahZOXXyBC?usp=sharing",
    },
    {
      id: 12,
      title: "Social Media App",
      description:
        "A mobile app for real-time social interaction, post sharing, and user engagement.",
      category: "mobile",
      image: "/images/portfolio/mobileapp5.jpeg",
      link: "https://drive.google.com/drive/folders/1GGYHozUoCQsphLSFQpr1btaonkF3y-lI?usp=sharing",
    },
    {
      id: 13,
      title: "Islamic App",
      description:
        "An Islamic lifestyle app offering prayer times, Quran, and religious content.",
      category: "mobile",
      image: "/images/portfolio/mobileapp6.png",
      link: "https://drive.google.com/drive/folders/1AsgdN1dHFbbpwne9_wZBjae3zbg-OAVZ?usp=sharing",
    },
    {
      id: 14,
      title: "Samana Ecommerce App",
      description:
        "An eCommerce mobile app tailored for the Samana brand with product browsing and online shopping.",
      category: "mobile",
      image: "/images/portfolio/mobileapp7.png",
      link: "https://drive.google.com/drive/folders/1ZDDR7gWSz9-C0yw7pm28JsXFqxo9oDHX?usp=sharing",
    },
    {
      id: 15,
      title: "Patient Fitness/Activity App",
      description:
        "A health tracking app focused on patient fitness, daily activity, and wellness insights.",
      category: "mobile",
      image: "/images/portfolio/mobileapp8.png",
      link: "https://drive.google.com/drive/folders/1UVJK2yZA7TsnFyV9sIsiNBXomwpQEbRl?usp=sharing",
    },
    {
      id: 16,
      title: "Artisit Portfolios App",
      description:
        "A platform for artists to showcase their portfolios, galleries, and creative projects.",
      category: "mobile",
      image: "/images/portfolio/mobileapp9.png",
      link: "https://drive.google.com/drive/folders/1uY_YWQmmXWH6q0YclEV9iGFH_vIuXbGF?usp=sharing",
    },
    {
      id: 17,
      title: "Event Managment App",
      description:
        "An event management tool for planning, organizing, and tracking event logistics.",
      category: "mobile",
      image: "/images/portfolio/mobileapp10.png",
      link: "https://drive.google.com/drive/folders/1t2kh2Zf2SiIK8dmkJKvUelkFKq_BII5m?usp=sharing",
    },
    {
      id: 18,
      title: "Ecommerce App",
      description:
        "A feature-rich eCommerce application for browsing, purchasing, and order tracking.",
      category: "mobile",
      image: "/images/portfolio/mobileapp11.png",
      link: "https://drive.google.com/drive/folders/1nlGLoM6FGvU39ffbWNXl8X9Jal-huQdE?usp=sharing",
    },
    {
      id: 19,
      title: "Chruch Guide App",
      description:
        "An app to help users find church locations, events, sermons, and spiritual resources.",
      category: "mobile",
      image: "/images/portfolio/mobileapp12.png",
      link: "https://drive.google.com/drive/folders/1vbvYbOyYaoJY9XOLfsHVoM2FhXoGACSx?usp=sharing",
    },
    {
      id: 20,
      title: "E-Learning App",
      description:
        "An e-learning platform offering online courses, quizzes, and student progress tracking.",
      category: "mobile",
      image: "/images/portfolio/mobileapp13.png",
      link: "https://drive.google.com/drive/folders/1KuUYk1Uug0t5VvomWD8Y5aA1skZZ2Xr5?usp=sharing",
    },
    {
      id: 21,
      title: "Ecommerce Website",
      description:
        "A feature-rich eCommerce website for browsing, purchasing, and order tracking.",
      category: "website",
      image: "/images/portfolio/website8.png",
      link: "https://drive.google.com/drive/folders/1X9m7u2bHLjonNQZC5qmoqQgahZOXXyBC?usp=sharing",
    },
    {
      id: 22,
      title: "Real Estate Website",
      description:
        "A real estate website for browsing, purchasing, and renting properties.",
      category: "website",
      image: "/images/portfolio/website9.png",
      link: "https://drive.google.com/drive/folders/1nYJxL3uUCxIKiSR8UTdc1NyAqnwlzvrM?usp=sharing",
    },
    {
      id: 23,
      title: "Oriole AI Suite",
      description: "A suite of AI tools for different types of AI Solutions.",
      category: "ai",
      image: "/images/portfolio/ai2.png",
      link: "https://drive.google.com/drive/folders/14dmt4xgYLAa8PY6sw8Nl8vVcWMm6AR3T?usp=sharing",
    },
    {
      id: 24,
      title: "Software Agency Website",
      description:
        "A software development agency website for showcase their portfolio and services.",
      category: "website",
      image: "/images/portfolio/website10.png",
      link: "https://drive.google.com/drive/folders/1L-hNyxhSeWq-kFlie6USVEiU8S0ZXLkk?usp=sharing",
    },
    {
      id: 25,
      title: "Stock Managment System",
      description:
        "A stock management system for tracking and managing stocks and inventory.",
      category: "website",
      image: "/images/portfolio/website11.png",
      link: "https://drive.google.com/drive/folders/1GTkdqhRf8jpA5SqwZHyaYxvBgueQDI8X?usp=sharing",
    },
    {
      id: 26,
      title: "Restaurant App Desgin",
      description: "A restaurant app design for mobile devices.",
      category: "uiux",
      image: "/images/portfolio/uiux1.png",
      link: "https://drive.google.com/drive/folders/13lWfDnJByi5RwCujUbujiEpXrMvUyRWD?usp=sharing",
    },
    {
      id: 27,
      title: "MultiVendor App",
      description: "A multi-vendor app design for mobile devices.",
      category: "uiux",
      image: "/images/portfolio/uiux2.png",
      link: "https://drive.google.com/drive/folders/16TyaQJ_kO15sO6yMq2bdY6y0L-9XBsMo?usp=sharing",
    },
    {
      id: 28,
      title: "Social Business App",
      description: "A social businessapp design for mobile devices.",
      category: "uiux",
      image: "/images/portfolio/uiux3.png",
      link: "https://drive.google.com/drive/folders/142iOH58jR-Ws3n7j8QjGBLCtedfXvwC8?usp=sharing",
    },
    {
      id: 29,
      title: "Income & Expense Managment App",
      description:
        "A income and expense managment app for tracking financial transactions.",
      category: "uiux",
      image: "/images/portfolio/uiux4.png",
      link: "https://drive.google.com/drive/folders/18j5aStlEnuMebhZpiMGb6ZWN9lCaQ2nE?usp=sharing",
    },
    {
      id: 30,
      title: "Islamic App",
      description:
        "A Islamic lifestyle app offering prayer times, Quran, and religious content.",
      category: "uiux",
      image: "/images/portfolio/uiux5.png",
      link: "https://drive.google.com/drive/folders/1K3BGVTAlOVF6vMk2sBqihaycafHbgSsy?usp=sharing",
    },
    {
      id: 31,
      title: "Medical Dashboard Web Design",
      description:
        "A medical dashboard website design for managing patient reports and health analytics.",
      category: "uiux",
      image: "/images/portfolio/uiux6.png",
      link: "https://drive.google.com/drive/folders/1ijOKoXi0wAc31E9t13H5q7qBMv0Gshx3?usp=sharing",
    },
  ];

  // Filter items based on active tab
  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  // Tab data
  const tabs = [
    { id: "ai", label: "AI Solutions" },
    { id: "website", label: "Websites / Softwares" },
    { id: "mobile", label: "Mobile Apps" },
    // { id: "uiux", label: "UI/UX Design" },
    
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Portfolio</h2>
          <p className={styles.sectionSubtitle}>
            Selected projects I have worked on
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className={styles.tabIndicator}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          className={`${styles.portfolioGrid} ${
            activeTab === "mobile" ? styles.mobileGrid : ""
          }`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.portfolioItem} ${
                item.category === "mobile"
                  ? styles.mobileItem
                  : styles.websiteItem
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.link}
                className={styles.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.portfolioImageWrapper}>
                  {item.category === "mobile" && (
                    <div className={styles.mobileFrame}>
                      <div className={styles.mobileScreen}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.portfolioImage}
                        />
                      </div>
                    </div>
                  )}
                  {item.category !== "mobile" && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.portfolioImage}
                    />
                  )}
                  <div
                    className={`${styles.portfolioOverlay} ${
                      hoveredItem === item.id ? styles.hovered : ""
                    }`}
                  >
                    <div className={styles.portfolioContent}>
                      <h3 className={styles.portfolioTitle}>{item.title}</h3>
                      <p className={styles.portfolioDescription}>
                        {item.description}
                      </p>
                      <span className={styles.viewProject}>
                        View Project{" "}
                        <FiExternalLink className={styles.externalIcon} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;