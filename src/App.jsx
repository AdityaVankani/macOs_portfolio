import Navbar from '#components/Navbar.jsx'
import Welcome from '#components/Welcome'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import  Terminal  from '#windows/Terminal'
import  Dock  from '#components/Dock'
import React from 'react'

gsap.registerPlugin(Draggable);

function App() {
  return(

  <main>
    <Navbar/>
    <Welcome/>
    <Dock/>
    <Terminal/>

  </main>

  )
}

export default App
