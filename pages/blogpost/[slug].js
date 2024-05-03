import React from "react";

import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";


//find the file corresponding to slug
//populate them inside
const slug = () => {
  const router = useRouter();
  let { slug } = router.query;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Title of Page {slug}</h1>
      </div>

      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        deserunt, eius aliquam hic neque itaque sequi laudantium commodi natus
        quos, aperiam inventore nesciunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde eius excepturi placeat dolorem ducimus enim a
        recusandae nemo provident in sunt labore, id quasi tempora sequi eum
        maxime accusamus vel magnam molestiae officiis commodi quaerat.
        Accusantium architecto aperiam placeat hic nobis labore quibusdam culpa
        eius deserunt. Alias vero facere ullam.
      </div>
    </div>
  );
};

export default slug;
