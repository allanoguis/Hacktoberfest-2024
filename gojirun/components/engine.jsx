"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import gojiraImage from "@/app/images/gojirav3.svg";
import obstacleImage from "@/app/images/tank.svg";


const GAME_HEIGHT = 600;
const GAME_WIDTH = 1000;
const OBSTACLE_WIDTH = 100;
const OBSTACLE_HEIGHT = 50;
const GOJIRA_WIDTH = 150;
const GOJIRA_HEIGHT = 150;
const GAME_SPEED = 20;
const GROUND = 0;
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
  if (!gojiraImgRef.current) {
    gojiraImgRef.current = new Image();
    gojiraImgRef.current.src = gojiraImage.src;
  }
  if (!obstacleImgRef.current) {
    obstacleImgRef.current = new Image(); // Create a new Image object for the obstacle
    obstacleImgRef.current.src = obstacleImage.src; // Assign the source for the obstacle image
  }

  const jump = useCallback(() => {
    if (!jumping && !gameOver) {
      setJumping(true);
      let jumpHeight = 0; // Track the current jump height


      const jumpUp = setInterval(() => {
        if (jumpHeight < JUMP_HEIGHT) {
          jumpHeight += JUMP_HEIGHT / (jumpDuration / jumpInterval); // Increment jump height
          setGround(jumpHeight); // Update ground position
        } else {
          clearInterval(jumpUp); // Stop jumping up
          const fallDown = setInterval(() => {
            if (jumpHeight > GROUND) {
              jumpHeight -= JUMP_HEIGHT / (jumpDuration / jumpInterval); // Decrement jump height
              setGround(jumpHeight); // Update ground position
            } else {
              clearInterval(fallDown); // Stop falling down
              setJumping(false); // Reset jumping state
              setGround(GROUND); // Ensure ground is reset
            }
          }, jumpInterval);
        }
      }, jumpInterval);
    }
  }, [jumping, gameOver]);

  useEffect(() => {
    const handleKeyPress = (event) => { // Removed type annotation
      
        if (!gameStarted) {
          setGameStarted(true);
          setGameOver(false);
          setScore(0);
        } else {
          jump();
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
        gojiraImgRef.current,
        SPAWN_POINT, // Use the extracted starting point
        GAME_HEIGHT - (jumping ? JUMP_HEIGHT : ground) - GOJIRA_HEIGHT, // Use jumping state for Y position
        GOJIRA_WIDTH,
        GOJIRA_HEIGHT
      );

      // Ensure the obstacle image is loaded before drawing
      if (obstacleImgRef.current) {
        // Spawn obstacle
        context.drawImage(
          obstacleImgRef.current,
          obstacle, // Use the current obstacle position
          GAME_HEIGHT - OBSTACLE_HEIGHT, // Keep the obstacle at the ground level
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT
        );
      } else {
        console.error("Obstacle image not loaded");
      }
    };

    let gameLoop; 

    const startGameLoop = () => {
      gameLoop = setInterval(() => {
        setObstacle((prevLeft) => {
          if (prevLeft <= -OBSTACLE_WIDTH) {
            return GAME_WIDTH; // Reset to GAME_WIDTH when it goes off-screen
          }
          return prevLeft - GAME_SPEED; // Move the obstacle left
        });

        setScore((prevScore) => prevScore + 1);

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

            // Check for collision using bounding rectangles
            return !(
                gojiraRect.right < obstacleRect.left ||
                gojiraRect.left > obstacleRect.right ||
                gojiraRect.bottom < obstacleRect.top ||
                gojiraRect.top > obstacleRect.bottom
            );
        };

        // Check for collision
        if (isColliding()) {
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
  }, [score]); // Run whenever score changes

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
        {/* Must disable spacebar because it scrolls down */}
      </div>
    </div>
  );
}