"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const msg = useRef(null);
  const [message,setMessage] = useState("");
  useEffect(()=>{
    let mes = prompt("Enter the password");
    console.log(mes);
    if(mes == "03122021"){
      msg.current.innerText = "Hii baccha \n all the best for tomorrow, tomorrow is yours day. We have trust on you that you will surely crack the exam with a good rank. Sorry for my bad behaviour that i have done in recent days, but trust me whatever i have done there is reason behind it. \n Love You baccha ❤️♾️ \n Best wishes from yours betuu ❤️.";
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
          alt="Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  )
}
