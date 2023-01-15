import React from 'react'
import styles from "./presentation.module.css"

export default function Presentation() {
  return (
    <div style={{backgroundColor:"black", color:"white", paddingTop:"30px", paddingBottom:"20px"}}>
    <h1 className={styles.tit1}>Sobre Mi</h1>
    <div className={styles.cnt1}>
          Desde siempre me he encontrado cerca de la tecnología, en un
          principio dando servicios IT a las computadoras, y hoy amplio mi
          conocimiento dando una vuelta más de tuerca para llevar mi carrera y
          experiencia el campo de la programación, esta vez como desarrollador
          fullstack.
          Todos estos nuevos conocimientos, Javascript, React. Redux, Nodejs,
          HTML, CSS. Python, Bases de Datos, Redes, me dan la autoconfianza
          necesaria que me permite situarme en el lugar que me interesa y
          continuar con la pasión que siempre he tenido.
          Dentro de mis habilidades blandas puedo nombrar: proactividad,
          Trabajo en equipo, Resiliencia, Empatía,
          Capacidad de recibir y dar feedback, Solución de problemas y conflictos.
          Entre otras.
    </div>
 </div>
  )
}
