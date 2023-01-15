import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import styles from "./principal.module.css"
import img from "../../../images/AETC_FP-Informatica_A-848x449.webp"
import { useNavigate } from 'react-router-dom'

export default function Principal() {
 
  return (

   

    <Parallax className={styles.backg} bgImage = {img} strength={400}>
      <div style = {{height:"60vh"}}>
        <p className={styles.line1}>José Antonio Miró Erdmann</p>
        <p className={styles.line2}>Full Stack Developer</p>
      </div>
    </Parallax>
  )
}
