
import React, { useState } from 'react';
import s from './Window.module.scss';

const Window = ({ h1 = "★★★★★★★★", windowtext, special, bgcolor, positionx = 100, positiony=200 }) => {
  const [position, setPosition] = useState({ x: positionx, y: positiony });
// Начальная позиция
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true)

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x, 
      y: e.clientY - position.y,
    });
    e.stopPropagation(); // Оставляем, чтобы только заголовок реагировал
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x, 
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`${s.window} ${bgcolor ? s[bgcolor] : ''}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab', 
      }}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onMouseUp={isDragging ? handleMouseUp : undefined}
    >
      <div
        className={`${s.header} ${bgcolor ? s[bgcolor] : ''}`}
        onMouseDown={handleMouseDown} 
      >
        <span>{h1}</span>
        <button onClick={() => setVisible(false)}
          className={s.closeButton}

        >
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
