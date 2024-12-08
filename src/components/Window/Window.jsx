// import React, { useState } from 'react';
// import s from './Window.module.scss'; 

// const Window = ({h1 = "★★★★★★★★", windowtext, special, bgcolor}) => {
//   // Состояние для позиции окна (x и y координаты)
//   const [position, setPosition] = useState({ x: 500, y: 300 });

//   // Состояние для отслеживания, происходит ли перетаскивание
//   const [isDragging, setIsDragging] = useState(false);

//   // Состояние для видимости окна
//   const [isVisible, setIsVisible] = useState(true);

//   // Функция, которая вызывается при зажатии кнопки мыши
//   const handleMouseDown = () => {
//     setIsDragging(true); //  началось перетаскивание
//   };

//   // Функция, которая вызывается при движении мыши
//   const handleMouseMove = (e) => {
//     if (!isDragging) return; // Если не происходит перетаскивание, ничего не делаем

//     // Обновляем координаты окна относительно положения мыши
//     setPosition({
//       x: e.clientX - 100, // Смещение для центра окна
//       y: e.clientY - 0, // Смещение для выравнивания
//     });
//   };

//   // Функция, которая вызывается при отпускании кнопки мыши
//   const handleMouseUp = () => {
//     setIsDragging(false); // Завершаем перетаскивание
//   };

//   // Функция для закрытия окна
//   const closeWindow = () => {
//     setIsVisible(false); // Скрываем окно, устанавливая видимость в `false`
//   };

//   // Если окно скрыто, возвращаем `null`, чтобы ничего не отобразить
//   if (!isVisible) return null;

//   return (
//     <div
//       className={s.container} // Основной контейнер, занимающий весь экран
//       onMouseMove={handleMouseMove} // Отслеживаем движение мыши
//       onMouseUp={handleMouseUp} // Завершаем перетаскивание при отпускании кнопки мыши
//     >
//       <div
//         className={s.window} // Само окно, которое можно перетаскивать
//         onMouseDown={handleMouseDown} // Начинаем перетаскивание
//         style={{
//           top: `${position.y}px`, // Позиция окна сверху
//           left: `${position.x}px`, // Позиция окна слева
//         }}
//       >
//         <div className={s.header}>
//           <span>{h1}</span>
//           <button className={s.closeButton} onClick={closeWindow}>
//             ×
//           </button>
//         </div>
//         <div className={s.content}>
//         {windowtext}
//         <span>{special}</span>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Window;








// import React, { useState } from 'react';
// import s from './Window.module.scss'; 

// const Window = ({ h1 = "★★★★★★★★", windowtext, special, bgcolor,  }) => {
//    const [position, setPosition] = useState({ x: 100, y: 100 });

//   const [isDragging, setIsDragging] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   const handleMouseDown = () => setIsDragging(true);
//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPosition({
//       x: e.clientX ,
//       y: e.clientY    ,
//     });
//   };
//   const handleMouseUp = () => setIsDragging(false);
//   const closeWindow = () => setIsVisible(false);

//   if (!isVisible) return null;

//   return (
//     <div
//       className={s.container}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div
//         className={`${s.window} ${bgcolor ? s[bgcolor] : ''}`} 
//         onMouseDown={handleMouseDown}
//         style={{
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//         }}
//       >
//         <div className={`${s.header} ${bgcolor ? s[bgcolor] : ''}`}>
//           <span>{h1}</span>
//           <button className={s.closeButton} onClick={closeWindow}>×</button>
//         </div>
//         <div className={s.content}>
//           {windowtext}
//           <span>{special}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Window;
import React, { useState } from 'react';
import s from './Window.module.scss';

const Window = ({ h1 = "★★★★★★★★", windowtext, special, bgcolor }) => {
  const [position, setPosition] = useState({ x: 200, y: 200 }); // Начальная позиция
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 }); // Координаты начала перетаскивания

  // Начало перетаскивания
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x, // Разница между позицией окна и позицией курсора
      y: e.clientY - position.y,
    });
    e.stopPropagation();
  };

  // Перемещение окна
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x, // Новая позиция окна
      y: e.clientY - dragStart.y,
    });
  };

  // Завершение перетаскивания
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`${s.window} ${bgcolor ? s[bgcolor] : ''}`}
      onMouseDown={handleMouseDown} // Начало перетаскивания
      onMouseMove={handleMouseMove} // Перемещение
      onMouseUp={handleMouseUp} // Завершение перетаскивания
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab', // Индикатор захвата
      }}
    >
      <div className={`${s.header} ${bgcolor ? s[bgcolor] : ''}`}>
        <span>{h1}</span>
        <button className={s.closeButton} onClick={() => setIsDragging(false)}>
          ×
        </button>
      </div>
      <div className={s.content}>
        {windowtext}
        <span>{special}</span>
      </div>
    </div>
  );
};

export default Window;
