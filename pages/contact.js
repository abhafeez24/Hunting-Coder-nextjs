import React, { useState } from "react";
import styles from "../styles/Contact.module.css";


const Contact = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,phone,email,desc)
    const data = {name, phone, email, desc}
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then( data => {console.log('Success: ')
      alert("Thanks for Submitting");
      setname('')
      setphone('')
      setEmail('')
      setdesc('')
    })
    .catch((error) => {
      console.error('Error', error)
    })
  };

  const handleChange = (e) => {
    if(e.target.name === "name") {
      setname(e.target.value)
    } else if(e.target.name === "phone") {
      setphone(e.target.value)
    } else if(e.target.name === "email") {
      setEmail(e.target.value)
    } else if(e.target.name === "desc") {
      setdesc(e.target.value)
    }
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={styles.formControl}
            id="name"
            value={name}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="Phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className={styles.formControl}
            id="phone"
            value={phone}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter Phone No"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={styles.formControl}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputPassword1" className={styles.formlabel}>
            Password
          </label>
          <input
            type="password"
            className={styles.formControl}
            onChange={handleChange}
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlhtmlFor="desc" className={styles.formlabel}>
            Ellaborate your Concern
          </label>
          <textarea
            name="desc"
            value={desc}
            rows={6}
            onChange={handleChange}
            id="desc"
            placeholder="Write comment here"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
