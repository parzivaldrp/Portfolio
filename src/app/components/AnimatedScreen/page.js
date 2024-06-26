import React from 'react';
import styles from './AnimeScreen.module.css';


const cardsData = [
    {
      title: "Skills",
      description: "Explore my Skills",
      link: "/" // Add the link for the Skills page
    },
    {
      title: "Projects",
      description: "Explore my Projects",
      link: "/" // Add the link for the Projects page
    },
    {
      title: "Contact",
      description: "Contact me",
      link: "/" // Add the link for the Contact page
    },
    {
      title: "XP",
      description: "Explore my Experience",
      link: "/" // Add the link for the XP page
    }
  ];


  

const Page = () => {
    return (
        <>
            <div className={styles.animeScreen}>
                <div className={styles.screen}>
                    <div className={styles.screenImage}>  </div>

                    <div className={styles.overlayScreen}> </div>
                    <div className={styles.screenContainer}>

                     

                    </div>



                </div>

            </div>
        </>
    );
};

export default Page;
