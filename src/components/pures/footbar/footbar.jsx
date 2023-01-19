/**
 * Maquetado del pié de página.
 * Se mostrará durante toda la aplicación.
 * En el se encuentran los links-iconos que llevan a las diferentes redes sociales.
 * Los estilos se aplican con CSS Modules
 */

import React from 'react'
import styles from "./footbar.module.css"
import twiter from "../../../images/icons/95px-Twitter_logo_initial.png"
import whatsapp from "../../../images/icons/WhatsApp.png"
import linkedin from "../../../images/icons/Linkedin.png"
import github from "../../../images/icons/GitHub_Mark.png"

export default function Footbar(){

  return (
    <div className={styles.cnt}>
        
        <div><label className={styles.tit}>Estoy en las redes...</label></div>
        <div className={styles.cnt2}>

            {/* Icono twitter */}
            <div className={styles.cnt3}
                onClick={()=>{ window.open("https://twitter.com/JoseAnt87237179")}}
            >

                <img src={twiter} alt="ico twitter" />
                <label>Twitter</label>
            
            </div>

            {/*  Icono whatsapp */}
            <div className={styles.cnt3}  
                onClick={()=>{ window.open("https://api.whatsapp.com/send?phone=5491133326174")}}
            >
                <img src={whatsapp} alt="ico whtsapp"/>
                <label>WhatsApp</label>     
            </div>
            
            {/* Icono github */}
            <div className={styles.cnt3}
                onClick={()=>{ window.open("https://github.com/Joseacode/")}}
            >
                <img src={github} alt="ico github" />
                <label>GitHub</label>
            </div>
            
            {/* Icono linkedin */}
            <div className={styles.cnt3}
                onClick={()=>{ window.open("https://www.linkedin.com/in/joseamiro/")}}
                >
                    <img src={linkedin} alt="ico linkedin"/>
                    <label>Linkedin</label>
            </div>

        </div>
    </div>
    )
}