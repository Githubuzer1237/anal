// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styles from './Cube.module.scss';

// const Cube = () => {
//   const [particles, setParticles] = useState([]);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setMousePos({ x: e.clientX, y: e.clientY });

//     // Добавляем новые частицы в зависимости от движения мыши
//     setParticles((prevParticles) => [
//       ...prevParticles,
//       {
//         x: e.clientX,
//         y: e.clientY,
//         size: Math.random() * 10 + 5, // Размер частицы
//         speedX: Math.random() * 4 - 2, // Скорость по X
//         speedY: Math.random() * 4 - 2, // Скорость по Y
//         color: `hsl(${Math.random() * 360}, 100%, 75%)`, // Случайный цвет
//         shape: Math.random() > 0.5 ? 'circle' : 'square', // Форма
//         opacity: 1,
//       },
//     ]);
//   };

//   const updateParticles = () => {
//     setParticles((prevParticles) =>
//       prevParticles
//         .map((particle) => ({
//           ...particle,
//           x: particle.x + particle.speedX, // Обновляем положение по X
//           y: particle.y + particle.speedY, // Обновляем положение по Y
//           opacity: particle.opacity - 0.01, // Уменьшаем прозрачность
//         }))
//         .filter((particle) => particle.opacity > 0) // Убираем исчезнувшие частицы
//     );
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     const interval = setInterval(updateParticles, 16); // 60 FPS

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className={styles.particleFieldContainer}>
//       {particles.map((particle, index) => (
//         <motion.div
//           key={index}
//           className={styles.particle}
//           style={{
//             left: `${particle.x}px`,
//             top: `${particle.y}px`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             backgroundColor: particle.color,
//             opacity: particle.opacity,
//             borderRadius: particle.shape === 'circle' ? '50%' : '0',
//             transform: `scale(${1 + particle.opacity / 10})`,
//           }}
//           animate={{
//             left: `${particle.x}px`,
//             top: `${particle.y}px`,
//             opacity: particle.opacity,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Cube;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Cube.module.scss';

const SandEffect = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Генерация частиц песка
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    
    // Добавление частиц, когда двигается мышь
    setParticles((prevParticles) => [
      ...prevParticles,
      {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2, // Размер частиц
        speedX: Math.random() * 1 - 0.5, // Скорость по X
        speedY: Math.random() * 1 - 0.5, // Скорость по Y
        opacity: 1,
        color: `hsla(45, 50%, 70%, ${Math.random() * 0.5 + 0.5})`, // Тёплый песочный цвет
      },
    ]);
  };

  // Обновление положения частиц
  const updateParticles = () => {
    setParticles((prevParticles) =>
      prevParticles
        .map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          opacity: particle.opacity - 0.01, // Уменьшаем прозрачность
        }))
        .filter((particle) => particle.opacity > 0) // Убираем исчезнувшие частицы
    );
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(updateParticles, 16); // 60 FPS

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.sandEffectContainer}>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={styles.particle}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            borderRadius: '50%',
          }}
          animate={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SandEffect;
