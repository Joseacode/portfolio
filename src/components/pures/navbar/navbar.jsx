import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"

export default function Navbar(){

  return (
    <div>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink  
              to="/"
                className={({isActive})=> 
                  isActive ? styles.isactive : styles.notactive
                }
            >  
              Home
            </NavLink>
          </li>
          <li>
            <NavLink  
              to="/contact"
                className={({isActive})=> 
                  isActive ? styles.isactive : styles.notactive
                }
            >  
              Contactame
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    )
}