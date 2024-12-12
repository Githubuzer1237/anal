import React from 'react';
import s from './Partners.module.scss';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.photo}>
              <motion.div
                className={`${s.drag} ${s.drag1}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 300,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag2}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag3}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
            </div>
            <h1>
              COCA-COLA, MATTEL, NETFLIX, PARAMOUNTS,
              <br /> UNIVERSAL & WARNER BROS TRUST US <br />
              TO DELIVER THE CREATIVE NEEDED <br /> TO BUIKD AUTHENTIC
              CONNECTIONS <br /> WITH THEIR CONSUMERS.
            </h1>
            <div className={s.photo}>
            <motion.div
                className={`${s.drag} ${s.drag4}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag5}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
              <motion.div
                className={`${s.drag} ${s.drag6}`}
                drag
                dragConstraints={{
                  top: -100,
                  left: -100,
                  right: 100,
                  bottom: 100,
                }}
                whileDrag={{ rotate: 360 }}
                style={{
                  width: 200,
                  height: 150,
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
