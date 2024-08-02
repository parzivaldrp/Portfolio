import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';

function page() {
  return (
    <div>
      <div className={styles.footMain}>
        <div className={styles.footMail}>
          <a href="mailto:panchaldarshan507@gmail.com">
            <Image src='/svgs/mail.svg' width={20} height={20} alt='cv' />
            <span className={styles.footSpan}>panchaldarshan507@gmail.com</span>
          </a>
        </div>
        <div className={styles.footCall}>
          <a href="tel:+64-273793707">
            <Image src='/svgs/call.svg' width={20} height={20} alt='cv' />
            <span className={styles.footSpan}>+64-273793707</span>
          </a>
        </div>
        <div className={styles.footWhatsapp}>
          <a href="https://wa.me/+64-273793707">
            <Image src='/svgs/whatsapp.svg' width={20} height={20} alt='cv' />
            <span className={styles.footSpan}>Send me a WhatsApp message</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default page;