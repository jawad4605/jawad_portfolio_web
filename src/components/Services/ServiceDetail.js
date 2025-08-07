import { FiCheckCircle, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';
import styles from './Services.module.css';

const ServiceDetail = ({ service }) => {
  return (
    <div className={styles.serviceDetail}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceIconLarge}>{service.icon}</div>
        <div>
          <h1>{service.title}</h1>
          <p className={styles.serviceMeta}>
            <span><FiClock /> Average project: 2-4 weeks</span>
            <span><FiDollarSign /> Custom pricing</span>
            <span><FiUsers /> Clients served: 20+</span>
          </p>
        </div>
      </div>

      <div className={styles.serviceContent}>
        <div className={styles.serviceOverview}>
          <h2>Service Overview</h2>
          <p>{service.longDescription || service.description}</p>
          
          <div className={styles.serviceBenefits}>
            <h3>Why Choose This Service?</h3>
            <ul>
              {service.benefits?.map((benefit, index) => (
                <li key={index}><FiCheckCircle /> {benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.serviceFeaturesFull}>
          <h2>What is Included</h2>
          <div className={styles.featuresGrid}>
            {service.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <FiCheckCircle /> {feature}
              </div>
            ))}
          </div>
        </div>

        {service.process && (
          <div className={styles.serviceProcess}>
            <h2>My Process</h2>
            <div className={styles.processSteps}>
              {service.process.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;