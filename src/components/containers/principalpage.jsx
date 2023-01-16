import React from 'react'

import Principal from "./../pures/principal/principal"
import Presentation from './../pures/presentation/presentation'
import History from '../pures/history/history'
import Footbar from '../pures/footbar/footbar'

export default function LandingFrame() {
 
   return (
      <div>
        <Principal />
        <Presentation />
        <History /> 
        <Footbar />     
      </div> 
      )
 }

