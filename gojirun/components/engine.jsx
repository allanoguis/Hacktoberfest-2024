"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import gojiraImage from "@/app/images/gojirav3.svg";
import obstacleImage from "@/app/images/tank.svg";
import { saveGame } from '../api/saveGameAPI/route';


const GAME_HEIGHT = 600;
const GAME_WIDTH = 1000;
const OBSTACLE_WIDTH = 100;
const OBSTACLE_HEIGHT = 50;
const GOJIRA_WIDTH = 150;
const GOJIRA_HEIGHT = 150;
const GAME_SPEED = 10;
const GROUND = 0; // Gojira's feet position
const SPAWN_POINT = 20; // Set spawn point for Gojira
const JUMP_HEIGHT = 350;
const jumpDuration = 260; // Total duration of the jump
const jumpInterval = 20; // Interval for updating the jump height

export default function Engine() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [ground, setGround] = useState(GROUND);
  const [obstacle, setObstacle] = useState(GAME_WIDTH); // Spawn point of the obstacle
  const [score, setScore] = useState(0);
  const [jumping, setJumping] = useState(false);
  const canvasRef = useRef(null);
  const gojiraImgRef = useRef(null);
  const obstacleImgRef = useRef(null);
  const gameLoopRef = useRef(null); // Ref to store the game loop

  const loadImage = (ref, src) => {
    if (typeof Image !== "undefined" && !ref.current) {
      ref.current = new Image();
      ref.current.src = src;
    }
  };

  loadImage(gojiraImgRef, gojiraImage.src); // Load Gojira image
  loadImage(obstacleImgRef, obstacleImage.src); // Load obstacle image

  const jump = useCallback(() => {
    if (!jumping && !gameOver) {
      setJumping(true);
      let jumpHeight = 0;

      const jumpUp = setInterval(() => {
        if (jumpHeight < JUMP_HEIGHT) {
          jumpHeight += JUMP_HEIGHT / (jumpDuration / jumpInterval);
          setGround(jumpHeight);
        } else {
          clearInterval(jumpUp);
          const fallDown = setInterval(() => {
            if (jumpHeight > GROUND) {
              jumpHeight -= JUMP_HEIGHT / (jumpDuration / jumpInterval);
              setGround(jumpHeight);
            } else {
              clearInterval(fallDown);
              setJumping(false);
              setGround(GROUND);
            }
          }, jumpInterval);
        }
      }, jumpInterval);
    }
  }, [jumping, gameOver]);

  const handleKeyPress = useCallback((event) => {
    if (!gameStarted) {
      setGameStarted(true);
      setGameOver(false);
      setScore(0);
    } else {
      jump();
    }
  }, [gameStarted, jump]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const draw = (context) => {
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    context.drawImage(gojiraImgRef.current, SPAWN_POINT, GAME_HEIGHT - (jumping ? JUMP_HEIGHT : ground) - GOJIRA_HEIGHT, GOJIRA_WIDTH, GOJIRA_HEIGHT);
    if (obstacleImgRef.current) {
      context.drawImage(obstacleImgRef.current, obstacle, GAME_HEIGHT - OBSTACLE_HEIGHT, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
    }
  };

  const isColliding = () => {
    const gojiraRect = {
      left: SPAWN_POINT,
      right: SPAWN_POINT + GOJIRA_WIDTH,
      top: GAME_HEIGHT - (jumping ? JUMP_HEIGHT : ground) - GOJIRA_HEIGHT,
      bottom: GAME_HEIGHT - (jumping ? JUMP_HEIGHT : ground),
    };

    const obstacleRect = {
      left: obstacle,
      right: obstacle + OBSTACLE_WIDTH,
      top: GAME_HEIGHT - OBSTACLE_HEIGHT,
      bottom: GAME_HEIGHT,
    };

    return !(
      gojiraRect.right < obstacleRect.left ||
      gojiraRect.left > obstacleRect.right ||
      gojiraRect.bottom < obstacleRect.top ||
      gojiraRect.top > obstacleRect.bottom
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;

    const gameLoop = () => {
      setObstacle((prevLeft) => {
        if (prevLeft <= -OBSTACLE_WIDTH) {
          return GAME_WIDTH;
        }
        return prevLeft - GAME_SPEED;
      });

      setScore((prevScore) => prevScore + 1);

      if (isColliding()) {
        clearInterval(gameLoopRef.current);
        setObstacle(GAME_WIDTH);
        setGameOver(true);
        setGameStarted(false);
      }

      draw(context);
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    if (gameStarted && !gameOver) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }

    return () => cancelAnimationFrame(gameLoopRef.current);
  }, [gameStarted, gameOver, obstacle, ground]);

  useEffect(() => {
    // Retrieve score from localStorage when the component mounts
    const savedScore = localStorage.getItem("savedScore");
    if (savedScore) {
      setScore(Number(savedScore)); // Set the score if it exists
    }
  }, []); // Run only once on mount

  useEffect(() => {
    // Save the score to localStorage whenever it changes
    localStorage.setItem("savedScore", score.toString());
    if (gameOver) {
      saveGameFromFrontend();
    }
  }, [score]); // Run whenever score changes

  const saveGameFromFrontend = async () => {
    try {
      // Fetch the public IP address
      const ipResponse = await fetch('https://api64.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ipAddress = ipData.ip;
  
      const currentTime = new Date().toISOString();
  
      // Detect user device/browser info
      const userAgent = navigator.userAgent;
      const isBrave = !!navigator.brave; // Detect Brave browser
      const isEdge = /Edg/.test(userAgent); // Detect Microsoft Edge
      const isChrome = /Chrome/.test(userAgent) && !isEdge && !isBrave && !/OPR/.test(userAgent);
      const isFirefox = /Firefox/.test(userAgent); 
      const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent); 
      const isOpera = /OPR/.test(userAgent); 
  
      let browserName = 'Unknown Browser';
      if (isBrave) {
        browserName = 'Brave';
      } else if (isEdge) {
        browserName = 'Microsoft Edge';
      } else if (isChrome) {
        browserName = 'Chrome';
      } else if (isFirefox) {
        browserName = 'Firefox';
      } else if (isSafari) {
        browserName = 'Safari';
      } else if (isOpera) {
        browserName = 'Opera';
      }
  
      // Call the saveGame API with extended payload
      await saveGame({
        score: score,
        time: currentTime,
        ipAddress: ipAddress,      
        deviceType: browserName,   
        userAgent: userAgent       
      });
  
      console.log('Score:', score);
      console.log('IP Address:', ipAddress);
      console.log('Browser:', browserName);
      console.log('User Agent:', userAgent);
  
    } catch (error) {
      console.error('Error fetching IP or saving game data:', error);
    }
  };
  
  

  const handleStartGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacle(GAME_WIDTH); // Reset obstacle position when the game starts
  };

  const GameOverMessage = () => (
    <span className="mt-5 text-2xl text-primary font-semibold ">
      G A M E O V E R
    </span>
  );

  const StartGameButton = ({ onClick, isGameOver }) => (
    <span className="flex flex-col h-full left-500 mt-5">
      <button
        onClick={onClick}
        className=" text-primary font-semibold animate-pulse antialiased"
      >
        {isGameOver ? "R E S T A R T" : "S T A R T   G A M E"}
      </button>
    </span>
  );

  return (
    <div className="flex flex-col relative w-full p-11 text-primary justify-center items-center">
      <span className="absolute top-1 left-500">Score: {score}</span>
      <canvas ref={canvasRef} id="gameCanvas" width={GAME_WIDTH} height={GAME_HEIGHT} className="border border-purple-200 bg-purple-200/50" onClick={jump} />
      <div className="flex flex-col absolute bottom-50 justify-center items-center">
        {gameOver && <GameOverMessage />}
        {!gameStarted && <StartGameButton onClick={handleStartGame} isGameOver={gameOver} />}
      </div>
      <div className="mt-4 text-sm text-primary">click / tap the game area to jump</div>
    </div>
  );
}