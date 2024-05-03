import React from 'react'
import styles from "../styles/Component.module.css";

const about = () => {
  return (
    <div>
    <h1 className={styles.heading}>About Us</h1>
    <div class={styles.container}>
        <h2 className={styles.subHeading}>Our Story</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod pharetra magna, at pharetra justo aliquet eget. Nullam nec bibendum turpis. Proin nec ultricies justo. Duis nec magna quis eros suscipit auctor. Nulla eget tristique arcu, vel tristique justo. Sed suscipit ligula eget quam efficitur, nec posuere nunc consequat.</p>
        
        <h2 className={styles.subHeading}>Our Mission</h2>
        <p className={styles.text}>Integer sodales ultrices libero, eget scelerisque libero bibendum vel. Duis id turpis ac ligula sollicitudin iaculis. In fermentum condimentum felis, vitae tristique velit gravida eget. In hac habitasse platea dictumst. Nulla facilisi.</p>
        
        <h2 className={styles.subHeading}>Meet the Team</h2>
        <p className={styles.text}>Our team is made up of passionate individuals dedicated to making a difference. We come from diverse backgrounds but share a common goal.</p>
        <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - Marketing Director</li>
            <li>Michael Johnson - Head of Operations</li>
        </ul>
        
        <h2 className={styles.subHeading}>Contact Us</h2>
        <p className={styles.text}>Email: info@example.com</p>
        <p className={styles.text}>Phone: 123-456-7890</p>
    </div>



    </div>
  )
}

export default about
