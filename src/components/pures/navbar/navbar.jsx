import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"

export default function Navbar(){

  return (
    <div>
      <div className={styles.nav}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contactame</NavLink></li>
        </ul>
      </div>
    </div>
    )
}