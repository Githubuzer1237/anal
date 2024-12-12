import React, { useState, useRef } from 'react';
import s from './Studio.module.scss';

const Studio = () => {
  const imagesArray = [
    '/academy1.jpg',
    '/academy2.jpg',
    '/academy3.jpg',
    '/academy4.jpg',
    '/academy5.jpg',

    
  ]; // Массив путей к картинкам

  const [images, setImages] = useState([]); // Хранит массив картинок с позициями и типами
  const lastPosRef = useRef({ x: 0, y: 0 }); // Хранит последнюю добавленную позицию

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const lastPos = lastPosRef.current;
    const distance = Math.sqrt(
      Math.pow(clientX - lastPos.x, 2) + Math.pow(clientY - lastPos.y, 2)
    );

    // Если перемещение мыши превышает 200px
    if (distance >= 200) {
      lastPosRef.current = { x: clientX, y: clientY }; // Обновляем последнюю позицию

      // Выбираем случайное изображение из массива
      const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

      // Создаем новый объект картинки
      const newImage = {
        id: Date.now(), // Уникальный идентификатор
        src: randomImage,
        x: clientX,
        y: clientY,
      };

      // Добавляем картинку в массив
      setImages((prevImages) => [...prevImages, newImage]);

      // Удаляем картинку через 1 секунду с эффектом исчезновения
      setTimeout(() => {
        setImages((prevImages) =>
          prevImages.map((img) =>
            img.id === newImage.id ? { ...img, visible: false } : img
          )
        );

        // Удаляем картинку из DOM через дополнительное время для завершения анимации
        setTimeout(() => {
          setImages((prevImages) =>
            prevImages.filter((img) => img.id !== newImage.id)
          );
        }, 500); // Дополнительные 500ms для завершения CSS-анимации
      }, 1000);
    }
  };

  return (
    <div 
      className={s.studio} 
      onMouseMove={handleMouseMove}
    >
      <div className="container">
        <div className={s.wrapper}>
          <h1 className={s.title}>ANALOGUE STUDIO</h1>
        </div>

        {images.map((image) => (
        <img 
          key={image.id}
          src={image.src} // Подставляем путь к случайному изображению
          alt="Cursor Image"
          className={`${s.image} ${image.visible !== false ? s.visible : s.hidden}`} // Динамическое назначение классов
          style={{
            position: 'absolute',
            top: image.y,
            left: image.x,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      ))}


      </div>
      
    </div>
  );
};

export default Studio;
