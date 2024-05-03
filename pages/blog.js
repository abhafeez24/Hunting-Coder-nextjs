import React from 'react'
import styles from "../styles/Component.module.css";
import Link from "next/link";


//collect all data from blogdata directory
//Iterate and diplay them
const blog = () => {
  return (
    <div>
    <style jsx>
    {`
      h3 {
        cursor:pointer
      }
    `}
    </style>
        <h2 className={styles.heading}>Latest Blog</h2>
        <div className={styles.container}>
          <div className="blogs">
          <Link href={'/blogpost/learn-javascript'}>
              <h3 className={styles.subHeading}>How to Learn javascript In 2022</h3></Link>
              <p className={styles.text}>JavaScript is Language use to design a web</p>
          </div>
          <div className="blogs">
              <Link href={'/blogpost/learn-Kubernities'}>
              <h3 className={styles.subHeading}>How to Learn kubernities In 2022</h3></Link>
              <p className={styles.text}>JavaScript is Language use to design a web</p>
          </div>
          <div className="blogs">
              <Link href={'/blogpost/learn-Python'}>
              <h3 className={styles.subHeading}>How to Learn Python In 2022</h3></Link>
              <p className={styles.text}>JavaScript is Language use to design a web</p>
          </div>
          <div className="blogs">
              <Link href={'/blogpost/learn-GO'}>
              <h3 className={styles.subHeading}>How to Learn GO In 2022</h3></Link>
              <p className={styles.text}>JavaScript is Language use to design a web</p>
          </div>
        </div>
    </div>
  )
}

export default blog
