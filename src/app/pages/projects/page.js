import React from 'react'
import styles from './project.module.css';


const page = () => {
  return (
   <div className={styles.projectMain}>
       <div className={styles.head}>
<div className={styles.headJR}>    
      <h2>Projects</h2>
</div>

       </div>
       <div className={styles.jigu}><hr/></div>

       <div className={styles.projectLoad}><h2>Uploading soon ...</h2></div>

   </div>
  )
}

export default page
