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
    // ── LIVE AI PROJECTS (pinned to top) ──
    {
      id: 17,
      title: "VieroMind",
      description:
        "Licensed therapists and private AI tools in one place. Your path to mental wellness, designed for regional realities.",
      category: "ai",
      image: "/images/portfolio/vieromind-live.svg",
      link: "https://vieromind.com",
    },
    {
      id: 18,
      title: "Jalish Fine Jewelry",
      description:
        "Luxury fine jewelry e-commerce platform showcasing handcrafted bespoke pieces. Timeless elegance, refined.",
      category: "ai",
      image: "/images/portfolio/jalish-live.svg",
      link: "https://jalish.manus.space",
    },
    {
      id: 19,
      title: "RoundTable VierOMind",
      description:
        "Invitation-only strategic convening portal defining a scalable mental health system for Pakistan's 240 million citizens.",
      category: "ai",
      image: "/images/portfolio/roundtable-live.svg",
      link: "https://roundtablevieromind.manus.space",
    },
    {
      id: 20,
      title: "Viero Academy: Clinical Document Engine",
      description:
        "AI-powered clinical document engine that extracts structure from PDF/Word files and generates professional print-ready PDFs.",
      category: "ai",
      image: "/images/portfolio/vieroacademy.svg",
      link: "https://vieroacademy.manus.space",
    },
    {
      id: 21,
      title: "FileConv Pro",
      description:
        "Free online file conversion platform with 20+ tools for PDF, Word, images, and Markdown. Fast, free, no sign-up required.",
      category: "ai",
      image: "/images/portfolio/fileconvpro.svg",
      link: "https://fileconvpro.manus.space",
    },
    // ── OTHER AI PROJECTS ──
    {
      id: 3,
      title: "RAG GPT Implementation",
      description:
        "Custom Retrieval-Augmented Generation system for enhanced AI question answering capabilities.",
      category: "ai",
      image: "/images/portfolio/website4.png",
      link: "https://drive.google.com/drive/folders/1fuE7Ip5eKscjx7KLOxQSVn2syGI99aoS?usp=sharing",
    },
    {
      id: 9,
      title: "Oriole AI Suite",
      description: "A suite of AI tools for different types of AI Solutions.",
      category: "ai",
      image: "/images/portfolio/ai2.png",
      link: "https://drive.google.com/drive/folders/14dmt4xgYLAa8PY6sw8Nl8vVcWMm6AR3T?usp=sharing",
    },
    {
      id: 12,
      title: "Mouse Behavior Authentication System",
      description:
        "An AI-powered authentication system that verifies users based on their mouse movement patterns and behaviors.",
      category: "ai",
      image: "/images/portfolio/ai3.jpeg",
      link: "https://github.com/jawad4605/browser_behaviour?tab=readme-ov-file",
    },
    {
      id: 13,
      title: "Sentiment Analysis System",
      description:
        "A natural language processing (NLP) system that analyzes text data to determine emotions, opinions, and sentiments.",
      category: "ai",
      image: "/images/portfolio/ai4.png",
      link: "https://github.com/jawad4605/sentimential_analysis",
    },
    {
      id: 14,
      title: "AI Automation System",
      description:
        "An AI-driven automation platform designed to streamline tasks, improve efficiency, and reduce human intervention.",
      category: "ai",
      image: "/images/portfolio/ai5.jpg",
      link: "https://github.com/jawad4605/sentimential_analysis",
    },
    {
      id: 15,
      title: "Delivery Boy Tracking System",
      description:
        "A real-time tracking and monitoring system for delivery personnel to enhance logistics efficiency and transparency.",
      category: "ai",
      image: "/images/portfolio/ai6.jpeg",
      link: "https://github.com/jawad4605/delivery_efficiency_dashboard/tree/main",
    },
    {
      id: 16,
      title: "AI Story Book Generator",
      description:
        "An AI tool that generates creative and engaging children's storybooks with unique plots, illustrations, and narration.",
      category: "ai",
      image: "/images/portfolio/ai7.jpeg",
      link: "https://drive.google.com/drive/folders/1kGA40-m_qeZRJjukfuSc9pHC1AyotwAO?usp=sharing",
    },
    // ── WEBSITES / SOFTWARES ──
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
      title: "Healthcare Dashboard",
      description:
        "Comprehensive medical dashboard for patient management, appointment scheduling, and health analytics.",
      category: "website",
      image: "/images/portfolio/website3.png",
      link: "https://drive.google.com/drive/folders/1UmYP7bAF-eWHDuh4yzyeb6EkzvQ-qYvU?usp=sharing",
    },
    {
      id: 8,
      title: "Medical Lab Dashboard",
      description:
        "Comprehensive medical dashboard for patient report management and health analytics.",
      category: "website",
      image: "/images/portfolio/website6.png",
      link: "https://drive.google.com/drive/folders/1qoP2MpSos2iMC1lHTtrcc_qnGIvNDGcl?usp=sharing",
    },
    {
      id: 10,
      title: "Software Agency Website",
      description:
        "A software development agency website for showcase their portfolio and services.",
      category: "website",
      image: "/images/portfolio/website10.png",
      link: "https://drive.google.com/drive/folders/1L-hNyxhSeWq-kFlie6USVEiU8S0ZXLkk?usp=sharing",
    },
    {
      id: 11,
      title: "Stock Managment System",
      description:
        "A stock management system for tracking and managing stocks and inventory.",
      category: "website",
      image: "/images/portfolio/website11.png",
      link: "https://drive.google.com/drive/folders/1GTkdqhRf8jpA5SqwZHyaYxvBgueQDI8X?usp=sharing",
    },
    // ── MOBILE APPS ──
    {
      id: 4,
      title: "Medical AI Assistant",
      description:
        "Mobile application providing AI-powered medical diagnosis support and health recommendations.",
      category: "mobile",
      image: "/images/portfolio/mobileapp1.jpeg",
      link: "https://drive.google.com/drive/folders/1FBdZgRyP9VlcVN4-GS-8hbP1WrjrdAxY?usp=sharing",
    },
    {
      id: 5,
      title: "Weather Monitoring App",
      description:
        "Real-time weather forecasting application with location-based alerts and historical data analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp2.jpeg",
      link: "https://drive.google.com/drive/folders/1ZbxgHiOTyZvPCKrMQJhww-nBtCL1MTsL?usp=sharing",
    },
    {
      id: 6,
      title: "Weather Monitoring App 2",
      description:
        "Real-time weather forecasting application with location-based alerts and historical data analysis.",
      category: "mobile",
      image: "/images/portfolio/mobileapp3.jpeg",
      link: "https://drive.google.com/drive/folders/1XEFMZGQdSaH7-My0HdN7t4RXZEKZ_lU4?usp=sharing",
    },
    {
      id: 7,
      title: "Sales Tracking App",
      description:
        "Field sales monitoring application with GPS tracking, visit logging, and performance analytics.",
      category: "mobile",
      image: "/images/portfolio/mobileapp4.jpeg",
      link: "https://drive.google.com/drive/folders/1FnOEAqXktpNMbopkdy9X49WbZGGlMEtm?usp=sharing",
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
