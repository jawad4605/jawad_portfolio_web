import { useState } from 'react';
import { FiExternalLink, FiCode, FiLayers, FiCpu, FiDatabase, FiCloud, FiPenTool, FiBarChart2, FiShield } from 'react-icons/fi';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Data Science Solutions',
      description: 'Advanced analytics and predictive modeling to extract insights from your data.',
      features: [
        'Predictive Modeling',
        'Statistical Analysis',
        'Data Visualization',
        'EDA (Exploratory Data Analysis)',
        'Feature Engineering',
        'Model Evaluation'
      ],
      icon: <FiBarChart2 />
    },
    {
      id: 2,
      title: 'Machine Learning Development',
      description: 'Custom ML models tailored to your specific business requirements.',
      features: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Deep Learning',
        'Model Training & Tuning',
        'Feature Selection',
        'Performance Optimization'
      ],
      icon: <FiCpu />
    },
    {
      id: 3,
      title: 'Computer Vision Systems',
      description: 'AI-powered image and video analysis solutions for various applications.',
      features: [
        'Object Detection',
        'Image Classification',
        'OCR (Text Recognition)',
        'Video Analytics',
        'YOLO Implementation',
        'OpenCV Solutions'
      ],
      icon: <FiLayers />
    },
    {
      id: 4,
      title: 'AI Integration',
      description: 'Seamless integration of AI models into existing business systems.',
      features: [
        'API Development',
        'Model Deployment',
        'Cloud Integration',
        'Real-time Inference',
        'Scalable Solutions',
        'Performance Monitoring'
      ],
      icon: <FiCode />
    },
    {
      id: 5,
      title: 'Data Engineering',
      description: 'Robust data pipelines and infrastructure for analytics.',
      features: [
        'ETL Pipelines',
        'Data Warehousing',
        'Big Data Solutions',
        'Data Cleaning',
        'Database Optimization',
        'Data Governance'
      ],
      icon: <FiDatabase />
    },
    {
      id: 6,
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports for data-driven decisions.',
      features: [
        'Power BI Dashboards',
        'Tableau Reports',
        'Plotly Visualizations',
        'Custom Dashboards',
        'Business Intelligence',
        'KPI Tracking'
      ],
      icon: <FiPenTool />
    },
    {
      id: 7,
      title: 'AI Consulting',
      description: 'Strategic guidance for implementing AI in your organization.',
      features: [
        'AI Strategy Development',
        'Use Case Identification',
        'Technology Selection',
        'ROI Analysis',
        'Implementation Roadmap',
        'Team Training'
      ],
      icon: <FiShield />
    },
    {
      id: 8,
      title: 'Cloud AI Solutions',
      description: 'Deploy scalable AI solutions on cloud platforms.',
      features: [
        'AWS AI Services',
        'Azure Machine Learning',
        'GCP AI Platform',
        'Model Hosting',
        'AutoML Solutions',
        'Serverless AI'
      ],
      icon: <FiCloud />
    }
  ];

  const openWhatsApp = (serviceTitle) => {
    const phoneNumber = '923209641408';
    const message = `Hi Jawad, I'm interested in your ${serviceTitle} service. Can we discuss this further?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My AI & Data Services</h2>
          <p className={styles.sectionSubtitle}>Cutting-edge data science and AI solutions to transform your business</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${activeService === service.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              onClick={() => openWhatsApp(service.title)}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.serviceFeatures}>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceHoverEffect}></div>
              <div className={styles.serviceHoverTag}>Learn More</div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>Need a custom AI solution for your business?</p>
          <button
            className={styles.ctaButton}
            onClick={() => openWhatsApp('custom AI project')}
          >
            Let&apos;s Discuss Your Project <FiExternalLink className={styles.externalIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;