import React from 'react'
import Hero from '../components/Hero/Hero'
import Windows from '../components/Windowsm/Windows'
import Partners from '../components/Partners/Partners'
import Connect from '../components/Connect/Connect'
import SandEffect from '../components/Cube/Cube'
// import Cube from '../components/Cube/Cube'
const Home = () => {
  return (
  <>
  <Hero />
  <Windows />
  <Partners />
  {/* <Cube /> */}
  <SandEffect />
  <Connect h1='wanna' br='play' text="Hit connect and let's build brand fandom worldwide. " btn="let's connect" />
  </>
  )
}

export default Home