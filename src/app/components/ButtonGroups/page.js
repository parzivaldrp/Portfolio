import React from 'react';
import styles from './ButtonGroups.module.css';
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles.btnFather}>
    <Link href="/projects">
      <button className={styles.btn}>Projects</button>
    </Link>
    <Link href="/Technologies">
      <button className={styles.btn}>Technologies</button>
    </Link>
    <Link href="/About">
      <button className={styles.btn}>About</button>
    </Link>
  </div>
  );
};

export default Page;
