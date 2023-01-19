/**
 * Página 404 se mostrara cuando la ruta no exista
 */


import React from 'react'
import img from '../../images/404/404.png'

export default function Page404() {
  return (
    <div >
      <img src={img} alt='Pagina no encontrada' width={1460} height={719}/>
    </div>
  )
}
