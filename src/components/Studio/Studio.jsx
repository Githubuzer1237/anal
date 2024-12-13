import React, { useState, useRef } from 'react';
import s from './Studio.module.scss';

const Studio = () => {
  const imagesArray = [
    '/academy1.jpg',
    '/academy2.jpg',
    '/academy3.jpg',
    '/academy4.jpg',
    '/academy5.jpg',

    
  ];

  const [images, setImages] = useState([]); 
  const lastPosRef = useRef({ x: 0, y: 0 }); 

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const lastPos = lastPosRef.current;
    const distance = Math.sqrt(
      Math.pow(clientX - lastPos.x, 2) + Math.pow(clientY - lastPos.y, 2)
    );

    if (distance >= 200) {
      lastPosRef.current = { x: clientX, y: clientY };

      const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

      const newImage = {
        id: Date.now(),
        src: randomImage,
        x: clientX,
        y: clientY,
      };

      setImages((prevImages) => [...prevImages, newImage]);

      setTimeout(() => {
        setImages((prevImages) =>
          prevImages.map((img) =>
            img.id === newImage.id ? { ...img, visible: false } : img
          )
        );

        setTimeout(() => {
          setImages((prevImages) =>
            prevImages.filter((img) => img.id !== newImage.id)
          );
        }, 500); 
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
          <h1 className={s.title}>academy studio</h1>
        </div>

        {images.map((image) => (
        <img 
          key={image.id}
          src={image.src} 
          alt="Cursor Image"
          className={`${s.image} ${image.visible !== false ? s.visible : s.hidden}`} 
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
