import React from 'react'
import s from './Connect.module.scss'
import { motion } from 'framer-motion';

const Connect = ({h1, br, text, btn}) => {
  return (
   <>
   <div className={s.connect}>
    <div className="container">
      <div className={s.wrapper}>
       <h1> {h1} </h1>
   
      <div className={s.second}>
       <motion.img 
                className={`${s.drag} ${s.drag1}`}
                src="/mobile.gif"
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 100 }}
                style={{
                }}
              ></motion.img>

       <div className={s.right}>
       <motion.h1
       drag
       dragConstraints={{
         top: -100,
         left: -100,
         right: 100,
         bottom: 100,
       }}
       whileDrag={{ rotate: 100 }}>
        {br}
        </motion.h1>
       <button>{btn}</button>
       <p>{text}</p>
       </div>

      </div>
       
      </div>
    </div>
   </div>
   </>
  )
}

export default Connect
