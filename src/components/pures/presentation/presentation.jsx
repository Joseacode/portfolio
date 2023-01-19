/** 
 * En este componente se maqueta toda la estructura de la página de inicio.
 * Se usa una imagen de fondo y toda la informacón se sobre pone en la imagen.
 * Para los estilos se utiliza CSS Modules 
 */

import React from 'react'
import styles from "./presentation.module.css"
import img from  "../../../images/teclado.jpg"

export default function Presentation() {

    return (
      
    <div>
      
      <img src={img} alt="fondo2" className={styles.img}/>

      <label className={styles.line1}>
        Sobre mí...
      </label> 

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
  
      <label className={styles.line2}>
        Experiencia Laboral
      </label>
  
      <label className={styles.line3}>
        Enero 2000 Actualidad
      </label>
  
      <label className={styles.line4}>
        Reaparacón y mantenimiento técnico de computadoras
      </label>
  
      <label className={styles.line5}>
        Educación
      </label>
  
      <label className={styles.line6}>
        Junio 2007 - Diciembre 2010
      </label>
  
      <label className={styles.line7}>
        Técnicatura en Automatizacón Industrial - Universidad Nacional de San Luis - U.N.S.L.
      </label>
  
      <label className={styles.line8}>
        Prácticas Front End
      </label>
  
      <label className={styles.line9}>
        E-Commerce Viñedo Las Moritas - HYHO: Plataforma de intercambios  - HENRY Countries: Aplicacion de turismo
      </label>
  
      <label className={styles.line10}>
        Cursos
      </label>
  
      <label className={styles.line11}>
        Octubre 2022 - Actualidad
      </label>
  
      <label className={styles.line12}>
        Open Boot Camp - Front end developer
      </label>
  
      <label className={styles.line13}>
        Mayo 2022
      </label>
  
      <label className={styles.line14}>
        Soy HENRY Boot Camp - Full Stack Developer
      </label>
  
      <label className={styles.line15}>
        Julio 2020
      </label>
  
      <label className={styles.line16}>
        DIiplomatura en Python, Universidad Tecnológica Nacional (U.T.N.)
      </label>
  
      <label className={styles.line17}>
        Agosto 2020
      </label>
  
      <label className={styles.line18}>
        Diplomatura en base de datos, Universidad Tecnológica Nacional (U.T.N.)
      </label>
  
      <label className={styles.line19}>
        Diciembre 2019
      </label>
  
      <label className={styles.line20}>
        CCNA Routin and Switching: Introducción a Redes, Universidad Tecnológica Nacional (U.T.N.)
      </label>
  
      <label className={styles.line21}>
        Julio 2019
      </label>
  
      <label className={styles.line22}>
        CCNA Routin and Switching: Introducción a Redes, Universidad Tecnológica Nacional (U.T.N.)
      </label>
  
      <label className={styles.line23}>
        Habilidades
      </label>
  
      <label className={styles.line24}>
        JavaScript - HTML - CSS - React - Redux - MateriaUI - Material Table - Git Hub - Proactividad - Trabajo en equipo - Resilencia
      </label>

    </div>
  )
}

 
                