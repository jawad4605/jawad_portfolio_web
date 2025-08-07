import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';
import styles from './Services.module.css';

const ServicesGrid = () => {
  return (
    <div className={styles.servicesGrid}>
      {servicesData.map(service => (
        <Link 
          href={`/services/${service.slug}`} 
          key={service.id}
          className={styles.serviceLink}
        >
          <ServiceCard service={service} />
        </Link>
      ))}
    </div>
  );
};

export default ServicesGrid;