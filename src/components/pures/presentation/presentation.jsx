import React from 'react'
import styles from "./presentation.module.css"
import img from  "../../../images/teclado.jpg"


export default function Presentation() {
  return (
  <div>
    <img src={img} alt="fondo2" className={styles.img}/>
    <label style={{position: "relative", left: "160px",bottom: "1300px", color:"white", fontSize: "60px", marginBottom: "-60px"}}>Sobre Mi...</label> 
    <label className={styles.cnt1}>
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
    </label>
  </div>
)
  }
/* 

    
    
    
    /* <div className={styles.cnt1}>
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
} */

/* <div class="contenedor">
  <img src="URL DE IMAGEN" />
  <div class="texto-encima">Texto</div>
  <div class="centrado">Centrado</div>
</div> */