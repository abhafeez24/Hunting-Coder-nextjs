import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className={styles.main_nav}>
        <ul>
        
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blogs</li></Link>
          <Link href='/contact'><li>Contacts</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
