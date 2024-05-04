// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getblog?slug=how-to-learn-python

import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myfile = await fs.promises.readFile(('blogdata/'+element), 'utf-8');
    allblogs.push(JSON.parse(myfile))
  }
  res.status(200).json((allblogs));
  
  
  
  
  // fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    // if (err) {
    //   res.status(500).json({ error: "No such blog found" });
    // }

  // fs.readdir(`blogdata`, (err, data) => {
  //   let allblogs = []
  //   data.forEach((item) => {
  //     // console.log(item)
  //     fs.readFile('blogdata/'+item, 'utf-8', (err, d)=> {
  //       if (err) {
  //           res.status(500).json({ error: "No such blog found" });
  //      }
  //      allblogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allblogs);
  // });
}

