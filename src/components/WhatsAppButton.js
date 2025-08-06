'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '923209641408'; // Replace with your WhatsApp number in international format (e.g., 12025550123)
  const message = encodeURIComponent('Hello! I need assistance.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className={styles.whatsappButton} onClick={handleClick}>
      <FaWhatsapp className={styles.whatsappIcon} />
    </div>
  );
};

export default WhatsAppButton;