import { FiArrowRight } from 'react-icons/fi';
import styles from './Services.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>{service.icon}</div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      
      <div className={styles.serviceFeatures}>
        <ul>
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* <div className={styles.serviceHoverContent}>
        <span className={styles.viewDetails}>
          View Details <FiArrowRight className={styles.arrowIcon} />
        </span>
      </div> */}
    </div>
  );
};

export default ServiceCard;