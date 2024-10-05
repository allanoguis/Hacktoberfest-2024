"use client";

import React, { useState, useEffect, useCallback } from "react";
// import { Button } from "@/components/ui/button";

const JUMP_HEIGHT = 100;
const GAME_HEIGHT = 200;
const GAME_WIDTH = 600;
const CACTUS_WIDTH = 20;
const DINO_WIDTH = 40;
const DINO_HEIGHT = 40;
const GAME_SPEED = 5;

export default function Engine() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [dinoBottom, setDinoBottom] = useState(0);
  const [cactusLeft, setCactusLeft] = useState(GAME_WIDTH);
  const [score, setScore] = useState(0);
  const [jumping, setJumping] = useState(false);

  const jump = useCallback(() => {
    if (!jumping && !gameOver) {
      setJumping(true);
      setDinoBottom(JUMP_HEIGHT);
      setTimeout(() => {
        setDinoBottom(0);
        setJumping(false);
      }, 300);
    }
  }, [jumping, gameOver]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
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
    if (gameStarted && !gameOver) {
      const gameLoop = setInterval(() => {
        setCactusLeft((prevLeft) => {
          if (prevLeft <= -CACTUS_WIDTH) {
            return GAME_WIDTH;
          }
          return prevLeft - GAME_SPEED;
        });

        setScore((prevScore) => prevScore + 1);

        // Check for collision
        if (
          cactusLeft > 0 &&
          cactusLeft < DINO_WIDTH &&
          dinoBottom < CACTUS_WIDTH
        ) {
          setGameOver(true);
          setGameStarted(false);
        }
      }, 20);

      return () => clearInterval(gameLoop);
    }
  }, [gameStarted, gameOver, cactusLeft, dinoBottom]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative w-[600px] h-[200px] border-b-2 border-black bg-white overflow-hidden"
        onClick={jump}
      >
        {/* Dino */}
        <div
          className="absolute bottom-0 left-10 w-[40px] h-[40px] bg-black"
          style={{ bottom: `${dinoBottom}px` }}
        />
        {/* Cactus */}
        <div
          className="absolute bottom-0 w-[20px] h-[40px] bg-green-700"
          style={{ left: `${cactusLeft}px` }}
        />
      </div>
      <div className="mt-4 text-2xl font-bold">Score: {score}</div>
      {!gameStarted && (
        <button
          onClick={() => {
            setGameStarted(true);
            setGameOver(false);
            setScore(0);
          }}
          className="mt-4"
        >
          {gameOver ? "Restart" : "Start Game"}
        </button>
      )}
      {gameOver && (
        <div className="mt-4 text-xl text-red-600 font-bold">Game Over!</div>
      )}
      <div className="mt-4 text-sm text-gray-600">
        Press spacebar to jump or click/tap the game area
      </div>
    </div>
  );
}
