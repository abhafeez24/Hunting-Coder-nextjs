import React, {useState, useEffect} from "react";

import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";


//find the file corresponding to slug
//populate them inside
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlogs)
  
  
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{blog && blog.title}</h1>
      </div>

      <div className={styles.text}>
        {blog && blog.content}
      </div>
    </div>
  );
};


export async function getServerSideProps(context) {
  // console.log(context.query)
  
    const { slug } = context.query;
    
    // Fetch data from external API
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlogs = await data.json();

  // Pass data to the page via props
  return { props: { myBlogs } }
}

export default slug;
