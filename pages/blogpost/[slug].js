import React, {useState, useEffect} from "react";

import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";
import * as fs from "fs";

//find the file corresponding to slug
//populate them inside
const Slug = (props) => {

  function createMarkup(c) {
    return {__html: c};
  }

  const [blog, setBlog] = useState(props.myBlogs)
  
  
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{blog && blog.title}</h1>
      </div>

      {blog && <div className={styles.text} dangerouslySetInnerHTML={createMarkup(blog.content)}></div> } 
      
    </div>
  );
};


// export async function getServerSideProps(context) {
//   // console.log(context.query)
  
//     const { slug } = context.query;
    
//     // Fetch data from external API
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   let myBlogs = await data.json();

//   // Pass data to the page via props
//   return { props: { myBlogs } }
// }

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
         slug: 'how-to-learn-javascript'
        },
      }, 
      {
        params: {
         slug: 'how-to-learn-kubernities'
        },
      },
      {
        params: {
         slug: 'how-to-learn-python'
        },
      }
    ],
    fallback: true, // false or "blocking"
  }
}

export async function getStaticProps(context) {
  
    const { slug } = context.params;
    
    // Fetch data from external API
    let myBlogs = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');

  // Pass data to the page via props
  return { props: { myBlogs: JSON.parse(myBlogs) } }
}



export default Slug;
