"use client" //since the form is user interactive

import { useEffect, useState } from "react"
import styles from "./contact.module.css"
import Image from "next/image"
const  ContactPage = () => {

  // const[isCLient, setIsCLient]=useState(false);
  
  // useEffect(()=>{
  //   setIsCLient(true)
  // },[]);
  // const a=Math.random();
  // console.log(a);
   return (

    <div className={styles.container}> 
       <div className={styles.imgContainer}>
        <Image src="/contact.jpg" alt="" fill/>
       </div>
       <div className={styles.formContainer}>
        {/* {isCLient && a} */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Full Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="number" placeholder="Phone Number"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message">
          </textarea>
          <button className={styles.button}>Submit</button>
        </form>
       </div>
    </div>
   )
 }
 
 export default  ContactPage
 