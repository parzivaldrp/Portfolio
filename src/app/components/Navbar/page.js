import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';


const page = () => {
 

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
        <Link href="/">

            <h1>Darshan</h1>
          </Link>
        </div>
        <ul className={styles.navbarMenu}>
         
         
          <li>
            <Link href="/pages/projects">
            Projects
            </Link>
          </li>
          
        
        </ul>
      </div>
    </nav>
  );
};

export default page;