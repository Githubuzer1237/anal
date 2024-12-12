import React from 'react'
import s from './Windows.module.scss';
import Window from '../Window/Window';
const Windows = () => {
  return (
    <>
      <div className="container">
      <div className={s.windows}>
  <Window positionx={700} positiony={400}  special="Azim Makhmov" windowtext="Analogue are creative  MAGICIANS"h1="error 404" />
  <Window positionx={200} positiony={300} special="Aleksandr Martin" windowtext="JUST WOW!!! Made our Friday and worth every minute! " />
  <Window positionx={300} positiony={150} special="Bobur" windowtext="LOVE WORKING WITH THEM " bgcolor="pink"  />
  <Window positionx={600} positiony={200} special="Odil" windowtext="JUST WOW!!! " />


  </div>
      </div>
    </>
  )
}

export default Windows