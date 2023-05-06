"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const msg = useRef(null);
  const [message,setMessage] = useState("");
  useEffect(()=>{
    setMessage(prompt("Enter the password"));
    console.log(message);
    if(message == "shivam"){
      msg.current.innerText = "Hi! from shivam";
    }else{
      msg.current.innerText = "Failed";
     }
  },[]);
  return (
    <main className={styles.main}>
      <div><h1 id="msg" ref={msg}></h1></div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  )
}
