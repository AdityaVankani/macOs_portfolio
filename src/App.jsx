import Navbar from '#components/Navbar.jsx'
import Welcome from '#components/Welcome'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import  Terminal  from '#windows/Terminal'
import  Dock  from '#components/Dock'
import React from 'react'
import Safari from '#windows/Safari'
import Resume from '#windows/Resume'
import Finder from '#windows/Finder'
import Text from "#windows/Text"
import Image from "#windows/Image"
import Contact from "#windows/Contact"
import  Home  from  '#components/Home'
import Photos from "#windows/Photos"
import Profile from "#windows/Profile"
import Certi from "#windows/Certi"


gsap.registerPlugin(Draggable);

function App() {
  return(

  <main>
    <Navbar/>
    <Welcome/>
    <Dock/>
    <Terminal/>
    <Safari/>
    <Resume/>
    <Finder/>
    <Text/>
    <Image/>

    <Contact/>
    <Home/>
    <Photos/>
    <Profile/>
    <Certi/>



  </main>

  )
}

export default App
