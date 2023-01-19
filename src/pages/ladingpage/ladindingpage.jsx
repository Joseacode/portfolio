/**
 * Componente padre de los componenetes Principal y Presentación.
 * Se agruoan en unsa sola pagina y seran "Renderizados" en el orden que aparecen formando la Ladingpage
 */

import React from 'react'
import Presentation from '../../components/pures/presentation/presentation'
import Principal from '../../components/pures/principal/princiapal'

export default function LandingPage() {
 
   return (
      <div>
        <Principal />
        <Presentation />
      </div> 
      )
 }