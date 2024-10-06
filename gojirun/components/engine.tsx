"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import gojiraImage from "@/app/images/gojirav3.svg";

const JUMP_HEIGHT = 350;
const GAME_HEIGHT = 600;
const GAME_WIDTH = 1000;
const OBSTACLE_WIDTH = 20;
const GOJIRA_WIDTH = 150;
const GOJIRA_HEIGHT = 150;
const GAME_SPEED = 20;
const GROUND = 0;

export default function Engine() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [ground, setGround] = useState(GROUND);
  const [obstacle, setObstacle] = useState(GAME_WIDTH);
  const [score, setScore] = useState(0);
  const [jumping, setJumping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gojiraImgRef = useRef<HTMLImageElement | null>(null);
  if (!gojiraImgRef.current) {
    gojiraImgRef.current = new Image();
    gojiraImgRef.current.src = gojiraImage.src;
  }
  const gojiraImg = gojiraImgRef.current; // Use the ref for the image

  const jump = useCallback(() => {
    if (!jumping && !gameOver) {
      setJumping(true);
      setGround(JUMP_HEIGHT);
      setTimeout(() => {
        setGround(GROUND);
        setJumping(false);
      }, 300);
    }
  }, [jumping, gameOver]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        console.log(event.code);
        if (!gameStarted) {
          setGameStarted(true);
          setGameOver(false);
          setScore(0);
        } else {
          jump();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted, jump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!context) return;

    const draw = () => {
      // Clear the canvas
      context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      // Spawn Gojira
      context.drawImage(
        gojiraImg,
        20,
        GAME_HEIGHT - ground - GOJIRA_HEIGHT,
        GOJIRA_WIDTH,
        GOJIRA_HEIGHT
      );

      // Spawn obstacle
      context.fillStyle = "pink"; // Color for obstacle
      context.fillRect(obstacle, GAME_HEIGHT - 40, OBSTACLE_WIDTH, 40); // Adjust height as needed
    };

    let gameLoop: NodeJS.Timeout; // Declare gameLoop variable

    const startGameLoop = () => {
      gameLoop = setInterval(() => {
        setObstacle((prevLeft) => {
          if (prevLeft <= -OBSTACLE_WIDTH) {
            return GAME_WIDTH;
          }
          return prevLeft - GAME_SPEED;
        });

        setScore((prevScore) => prevScore + 1);

        // Define hitboxes
        const GOJIRA_HITBOX = {
          left: 20,
          right: 20 + GOJIRA_WIDTH,
          top: GAME_HEIGHT - ground - GOJIRA_HEIGHT,
          bottom: GAME_HEIGHT - ground,
        };

        const OBSTACLE_HITBOX = {
          left: obstacle,
          right: obstacle + OBSTACLE_WIDTH,
          top: GAME_HEIGHT - 40,
          bottom: GAME_HEIGHT,
        };

        // Check for collision
        if (
          GOJIRA_HITBOX.right > OBSTACLE_HITBOX.left &&
          GOJIRA_HITBOX.left < OBSTACLE_HITBOX.right &&
          GOJIRA_HITBOX.bottom > OBSTACLE_HITBOX.top &&
          GOJIRA_HITBOX.top < OBSTACLE_HITBOX.bottom
        ) {
          clearInterval(gameLoop); // Stop the game loop
          setObstacle(GAME_WIDTH); // Reset obstacle position on game over
          setGameOver(true);
          setGameStarted(false);
        }

        draw(); // Call draw function to update the canvas
      }, 1000 / 60); // 60 fps frame rate
    };

    if (gameStarted && !gameOver) {
      startGameLoop(); // Start the game loop if the game is running
    }

    return () => clearInterval(gameLoop); // Cleanup on component unmount
  }, [gojiraImg, gameStarted, gameOver, obstacle, ground]);

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

      <canvas
        ref={canvasRef} // Attach the ref to the canvas
        id="gameCanvas"
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        className="border border-purple-200 bg-purple-200/50"
        onClick={jump}
      />
      <div className="flex flex-col absolute bottom-50 justify-center items-center">
        {gameOver && <GameOverMessage />}
        {!gameStarted && (
          <StartGameButton onClick={handleStartGame} isGameOver={gameOver} />
        )}
      </div>

      <div className="mt-4 text-sm text-primary">
        click / tap the game area to jump
        {/* Must disaable spacebar because it scrolls down */}
      </div>
    </div>
  );
}
