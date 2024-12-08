import React from 'react'
import s from './Windows.module.scss';
import Window from '../Window/Window';
const Windows = () => {
  return (
    <>
      <div className="container">
      <div className={s.windows}>
  <Window  special="Azim Makhmov" windowtext="Analogue are creative  MAGICIANS"h1="error 404" />
  <Window special="Aleksandr Martin" windowtext="JUST WOW!!! " />
  <Window special="Bobur" windowtext="JUST WOW!!! " bgcolor="pink"  />
  <Window special="Odil" windowtext="JUST WOW!!! " />


  </div>
      </div>
    </>
  )
}

export default Windows