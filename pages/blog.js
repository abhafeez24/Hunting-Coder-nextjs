import React, {useEffect, useState} from 'react'
import styles from "../styles/Component.module.css";
import Link from "next/link";


//collect all data from blogdata directory
//Iterate and diplay them
const blog = () => {
  
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {

    console.log('useEffect running...')
    fetch('http://localhost:3000/api/blogs').then((a) => a.json()).then((parsed) => {
      console.log(parsed)
      setBlogs(parsed)
    })
    
  }, [])
  

  return (
    <>
    <style jsx>
    {`
      h3 {
        cursor:pointer
      }
    `}
    </style>
        <h2 className={styles.heading}>Latest Blog</h2>
        <div className={styles.container}>
          {blogs.map((blogitem) => {
            return <div className="blogs" key={blogitem.slug}>
          <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className={styles.subHeading}>{blogitem.title}</h3></Link>
              <p className={styles.text}>{blogitem.content.substr(0,100)}</p>
          </div>
          })}
        </div>
    </>
  )
}

export default blog
