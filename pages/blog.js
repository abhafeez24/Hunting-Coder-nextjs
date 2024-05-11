import React, {useEffect, useState} from 'react'
import styles from "../styles/Component.module.css";
import Link from "next/link";
import * as fs from 'fs';

//collect all data from blogdata directory
//Iterate and diplay them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  

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
              <p className={styles.text}>{blogitem.metadesc.substr(0,100)}</p>
          </div>
          })}
        </div>
    </>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json();

//   // Pass data to the page via props
//   return { props: { allBlogs } }
// }


export async function getStaticProps() {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(("blogdata/"+item), "utf-8");
    allBlogs.push(JSON.parse(myfile))
  }

  // Pass data to the page via props
  return { props: { allBlogs } }
}

export default Blog
