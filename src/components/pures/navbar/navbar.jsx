/**
 * Componente Navbar. Estará presente durante toda la aplicacón.
 * Se ubica en la parte superior de la pantalla.
 * Contiene los links necesarios para navegar entre dos páginas. Inicio y Contáctame.
*  Los estilos se aplican con CSS Modules.
*/

import React from 'react'
import { NavLink } from 'react-router-dom' //Navlink: da estilo al Link activo, renderizado condicional,
                                          // y permite navegar entre pagina paginas. Hook React.
import styles from "./navbar.module.css"

export default function Navbar(){

  return (
    <div>
      <div className={styles.nav}>
        <ul>

        {/* Link que apunta hacia la página Inicio ( / ) */}
          <li>
      
            <NavLink  
              to="/"
                className={({isActive})=> 
                  isActive ? styles.isactive : styles.notactive
                }
            >  
              Inicio
            </NavLink>
      
          </li>

           {/* Link que apunta hacia la página contact*/}
          <li>
      
            <NavLink  
              to="/contact"
                className={({isActive})=> 
                  isActive ? styles.isactive : styles.notactive
                }
            >  
              Contáctame
            </NavLink>

          </li>

        </ul>
      </div>
    </div>
    )
}