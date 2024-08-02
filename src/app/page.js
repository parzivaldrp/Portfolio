
'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Home = () => {
  const [displayText, setDisplayText] = useState('');

  const originalText = "I'm Darshan Panchal";
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/`~';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => {
        if (iteration >= originalText.length) {
          clearInterval(interval);
          return originalText;
        }

        const updatedText = originalText.split('').map((char, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('');

        iteration += 1 / 2; // Adjust the speed here
        return updatedText;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);


  
  const openCV = () => {
    // Construct the URL to the PDF file using the correct file path
    const cvUrl = '/Darshan Panchal CV.pdf';

    // Create a new iframe element
    const iframe = document.createElement('iframe');
    iframe.src = cvUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.frameBorder = 0;

    // Open the CV in a new tab
    const newWindow = window.open(cvUrl);
    if (newWindow) {
      // Append the iframe to the new tab's document body
      newWindow.document.body.appendChild(iframe);
    } else {
      // If blocked, display a message to the user
      alert('Please allow pop-ups to view the Curriculum Vitae.');
    }
  };

  return (

    <div className={styles.fatherHome}>
      <div className={styles.motherHome}>
        <div>
        <h2 className={styles.motherH3}>Hi there,<br /> welcome to my portfolio</h2>
        <p className={styles.motherP}>{displayText}</p>
        <q className={styles.motherQ}>
          Skilled in crafting dynamic, responsive user interfaces and robust, scalable server-side web-apps.
        </q>

        <div className={styles.btnDiv}><button className={styles.motherBtn} onClick={openCV}>Curriculum Vitae <Image src='/svgs/cv.svg' width={20} height={20} alt='cv'/></button></div>
        </div>

      </div>
    

    </div>
  );
};

export default Home;
