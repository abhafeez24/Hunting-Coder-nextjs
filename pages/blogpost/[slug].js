import React, {useState, useEffect} from "react";

import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";


//find the file corresponding to slug
//populate them inside
const slug = () => {
  const [blog, setBlog] = useState([])
  const router = useRouter();
  
  useEffect(() => {
    if(!router.isReady) {
      return;
    }
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=> a.json()).then((parsed) => {
      console.log(slug)
      console.log(parsed)
      setBlog(parsed)
      console.log(blog)
      
    })
  }, [router.isReady])
  
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

export default slug;
