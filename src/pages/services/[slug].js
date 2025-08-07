import { useRouter } from 'next/router';
import Head from 'next/head';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import ServiceDetail from '@/components/Services/ServiceDetail';
import { servicesData } from '@/components/Services/servicesData';
import styles from '@/components/Services/Services.module.css';

const ServiceDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find service by slug
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <div className={styles.notFound}>Service not found</div>;
  }

  const openWhatsApp = () => {
    const phoneNumber = '923116226767';
    const message = `Hi, I'm interested in your ${service.title} service. Can we discuss this further?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>{service.title} | Usama Hanif - Professional Service</title>
        <meta name="description" content={service.description} />
      </Head>

      <section className={styles.serviceDetailPage}>
        <div className={styles.container}>
          <button className={styles.backButton} onClick={() => router.back()}>
            <FiArrowLeft /> Back to Services
          </button>

          <ServiceDetail service={service} />

          <div className={styles.serviceCta}>
            <h3>Ready to get started with {service.title}?</h3>
            <button className={styles.ctaButton} onClick={openWhatsApp}>
              Contact Me <FiExternalLink />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;