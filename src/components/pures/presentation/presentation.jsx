import React from 'react'
import styles from "./presentation.module.css"
import img from  "../../../images/teclado.jpg"


export default function Presentation() {
  return (
  <div>
    <img src={img} alt="fondo2" className={styles.img}/>
    <label style={{position: "absolute", left: "160px",bottom: "350px", color:"white", fontSize: "30px"}}>Sobre mí...</label> 
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
    <label style={{position: "absolute", left: "160px",bottom: "150px", color:"white", fontSize: "30px"}}>
      Experiencia Laboral
    </label>
    <label style={{position: "absolute", left: "300px",bottom: "120px", color:"white", fontSize: "20px"}}>
      Enero 2000 Actualidad
    </label>
    <label style={{position: "absolute", left: "320px",bottom: "100px", color:"white", fontSize: "15px"}}>
      Reaparacón y mantenimiento técnico de computadoras
    </label>
    <label style={{position: "absolute", left: "160px",bottom: "60px", color:"white", fontSize: "30px"}}>
      Educación
    </label>
    <label style={{position: "absolute", left: "300px",bottom: "30px", color:"white", fontSize: "20px"}}>
      Junio 2007 - Diciembre 2010
    </label>
    <label style={{position: "absolute", left: "320px",bottom: "10px", color:"white", fontSize: "15px"}}>
      Técnicatura en Automatizacón Industrial - Universidad Nacional de San Luis - U.N.S.L.
    </label>
    <label style={{position: "absolute", left: "160px",bottom: "-30px", color:"white", fontSize: "30px"}}>
      Prácticas Front End
    </label>
    <label style={{position: "absolute", left: "300px",bottom: "-55px", color:"white", fontSize: "15px"}}>
      E-Commerce Viñedo Las Moritas - HYHO: Plataforma de intercambios  - HENRY Countries: Aplicacion de turismo
    </label>
    <label style={{position: "absolute", left: "160px",bottom: "-100px", color:"white", fontSize: "30px"}}>Cursos</label>
    <label style={{position: "absolute", left: "300px",bottom: "-120px", color:"white", fontSize: "20px"}}>Octubre 2022 - Actualidad</label>
    <label style={{position: "absolute", left: "320px",bottom: "-140px", color:"white", fontSize: "15px"}}>Open Boot Camp - Front end developer</label>
    <label style={{position: "absolute", left: "300px",bottom: "-170px", color:"white", fontSize: "20px"}}>Mayo 2022</label>
    <label style={{position: "absolute", left: "320px",bottom: "-190px", color:"white", fontSize: "15px"}}>Soy HENRY Boot Camp - Full Stack Developer</label>
    <label style={{position: "absolute", left: "300px",bottom: "-220px", color:"white", fontSize: "20px"}}>Julio 2020</label>
    <label style={{position: "absolute", left: "320px",bottom: "-240px", color:"white", fontSize: "15px"}}>DIiplomatura en Python, Universidad Tecnológica Nacional (U.T.N.)</label>
    <label style={{position: "absolute", left: "300px",bottom: "-270px", color:"white", fontSize: "20px"}}>Agosto 2020</label>
    <label style={{position: "absolute", left: "320px",bottom: "-290px", color:"white", fontSize: "15px"}}>Diplomatura en base de datos, Universidad Tecnológica Nacional (U.T.N.)</label>
    <label style={{position: "absolute", left: "300px",bottom: "-320px", color:"white", fontSize: "20px"}}>Diciembre 2019</label>
    <label style={{position: "absolute", left: "320px",bottom: "-340px", color:"white", fontSize: "15px"}}>CCNA Routin and Switching: Introducción a Redes, Universidad Tecnológica Nacional (U.T.N.)</label>
    <label style={{position: "absolute", left: "300px",bottom: "-370px", color:"white", fontSize: "20px"}}>Julio 2019</label>
    <label style={{position: "absolute", left: "320px",bottom: "-390px", color:"white", fontSize: "15px"}}>CCNA Routin and Switching: Introducción a Redes, Universidad Tecnológica Nacional (U.T.N.)</label>
    <label style={{position: "absolute", left: "160px",bottom: "-430px", color:"white", fontSize: "30px"}}>Habilidades</label>
    <label style={{position: "absolute", left: "320px",bottom: "-450px", color:"white", fontSize: "15px"}}>HTML - CSS - React - Redux - MateriaUI - Material Table - Git Hub - Proactividad - Trabajo en equipo - Resilencia</label>
  </div>
)
  }

 
                