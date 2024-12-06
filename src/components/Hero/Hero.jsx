import React, { useState, useEffect } from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameObjects, setGameObjects] = useState([]);

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
    setTimer(30);
    setGameObjects(generateGameObjects(imageSources));
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

  const generateGameObjects = (images) => {
    return images.map((src, index) => ({
      id: index,
      src,
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      speedX: Math.random() * 5 - 2.5,
      speedY: Math.random() * 5 - 2.5,
    }));
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setGameObjects((prev) =>
          prev.map((obj) => ({
            ...obj,
            x: (obj.x + obj.speedX + window.innerWidth) % window.innerWidth,
            y: (obj.y + obj.speedY + window.innerHeight) % window.innerHeight,
          }))
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleObjectClick = (id) => {
    setGameObjects((prev) => prev.filter((obj) => obj.id !== id));
    setScore((prev) => prev + 1);
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
    setGameObjects([]);
  };

  return (
    <div className="container">
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
            <button className={s.playful_btn} onClick={endGame}>Exit</button>
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
              onClick={() => handleObjectClick(obj.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
