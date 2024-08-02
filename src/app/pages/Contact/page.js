import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <div className={styles.info}>
        <p>
          <i className="fas fa-envelope" /> <a href="mailto:your_email@example.com">your_email@example.com</a>
        </p>
        <p>
          <i className="fas fa-phone" /> <a href="tel:+1234567890">+1234567890</a>
        </p>
        <p>
          <i className="fas fa-map-marker-alt" /> Your Location
        </p>
      </div>
      <div className={styles.social}>
        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;