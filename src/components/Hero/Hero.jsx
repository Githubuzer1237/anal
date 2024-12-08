


import React, { useState, useEffect } from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [gameObjects, setGameObjects] = useState([]);
  const [fragments, setFragments] = useState([]);

  const imageSources = [
    '/gameimg.gif',
    '/gameimg2.gif',
    '/gameimg3.gif',
    '/gameimg4.gif',
    '/gameimg5.gif',
    '/gameimg6.png',
    '/gameimg7.gif',
    '/gameimg8.png',
    '/gameimg9.png',
    '/gameimg10.png',
  ];

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimer(10);
    setGameObjects(generateGameObjects(imageSources));
  };

  const generateGameObjects = (images) => {
    return images.map((src, index) => ({
      id: index,
      src,
      x: Math.random() * (1000 - 100),
      y: Math.random() * (400 - 100),
      speedX: Math.random() * 15 - 15,
      speedY: Math.random() * 15 - 15,
    }));
  }; 

  const createFragments = (x, y, src) => {
    const fragmentCount = 8; 
    let newFragments = [];
    for (let i = 0; i < fragmentCount; i++) {
      newFragments.push({
        id: Date.now() + i, 
        x: x + Math.random() * 50 - 25, 
        y: y + Math.random() * 50 - 25,
        src: src,
        speedX: Math.random() * 5 - 2.5,
        speedY: Math.random() * 5 - 2.5,
      });
    }
    setFragments((prev) => [...prev, ...newFragments]);
  };

  const handleObjectClick = (id, x, y, src) => {
    setGameObjects((prev) => prev.filter((obj) => obj.id !== id));
    setScore((prev) => prev + 2);
    createFragments(x, y, src); 
  };

  useEffect(() => {
    if (isPlaying && timer === 0) {
      endGame();
    } else if (isPlaying && gameObjects.length === 0) {
      endGame();
    }
  }, [isPlaying, timer, gameObjects]);

  useEffect(() => {
    if (isPlaying && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [isPlaying, timer]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setGameObjects((prev) =>
          prev.map((obj) => ({
            ...obj,
            x: (obj.x + obj.speedX +1000) % 1000,
            y: (obj.y + obj.speedY + 400) % 400,
          }))
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (fragments.length > 0) {
      const interval = setInterval(() => {
        setFragments((prev) =>
          prev.map((fragment) => ({
            ...fragment,
            x: fragment.x + fragment.speedX,
            y: fragment.y + fragment.speedY,
          }))
        );
      }, 30);

      return () => clearInterval(interval);
    }
  }, [fragments]);

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
    setGameObjects([]);
    setFragments([]); 
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.anal} src="/analogue.png" alt="" />
        <div className={s.text}>
          <p>
            A seriously{' '}
            <button className={s.playful_btn} onClick={startGame}>
              PLAYFUL
            </button>{' '}
            <span className={s.brand}>brand</span> and motion{' '}
            <img className={s.img} src="/strelks.svg" alt="" />
            <br />
            <br />
            <span className={s.studio}>studio</span> combining fresh-forward
            thinking <br />
            and beautifully crafted creative to help <br />
            brands build{' '}
            <img className={s.img} src="finger.svg" alt="" />
            fandom{' '}
            <span className={s.world}>
              worldwide <img className={s.orbit} src="orbit.gif" alt="" />{' '}
            </span>
          </p>
        </div>
      </div>
      {isPlaying && (
        <div className={s.gameLayer}>
          <div className={s.scoreBoard}>
            <p>Score: {score}</p>
            <p className={s.highScore}>BEST: {highScore}</p>
            <p>Time: {timer}s</p>
            <button className={`${s.exit_btn}`} onClick={endGame}>
              Exit
            </button>
          </div>
          {gameObjects.map((obj) => (
            <img
              key={obj.id}
              src={obj.src}
              alt={`game object ${obj.id}`}
              className={s.gameObject}
              style={{
                left: obj.x,
                top: obj.y,
                position: 'absolute',
              }}
              onClick={() => handleObjectClick(obj.id, obj.x, obj.y, obj.src)}
            />
          ))}
          {fragments.map((fragment) => (
            <img
              key={fragment.id}
              src={fragment.src}
              alt={`fragment ${fragment.id}`}
              className={s.fragment}
              style={{
                left: fragment.x,
                top: fragment.y,
                position: 'absolute',
                width: '50px', 
                height: '50px',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
