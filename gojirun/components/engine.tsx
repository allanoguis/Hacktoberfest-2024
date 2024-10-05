"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JUMP_HEIGHT = 150;
const GAME_HEIGHT = 200;
const GAME_WIDTH = 600;
const CACTUS_WIDTH = 20;
const DINO_WIDTH = 40;
const DINO_HEIGHT = 40;
const GAME_SPEED = 10;

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
    <Card className="w-full max-w-3xl bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-purple-500/20 text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Gojirun Game
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div
          className="relative w-[600px] h-[200px] border-b-2 border-purple-500 bg-gray-900 overflow-hidden rounded-lg mb-4"
          onClick={jump}
        >
          {/* Dino */}
          <div
            className="absolute bottom-0 left-10 w-[40px] h-[40px] bg-purple-500"
            style={{ bottom: `${dinoBottom}px` }}
          />
          {/* Cactus */}
          <div
            className="absolute bottom-0 w-[20px] h-[40px] bg-pink-500"
            style={{ left: `${cactusLeft}px` }}
          />
        </div>
        <div className="text-2xl font-bold text-purple-300 mb-4">Score: {score}</div>
        {!gameStarted && (
          <Button
            onClick={() => {
              setGameStarted(true);
              setGameOver(false);
              setScore(0);
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-colors"
          >
            {gameOver ? "Restart" : "Start Game"}
          </Button>
        )}
        {gameOver && (
          <div className="mt-4 text-xl text-pink-500 font-bold">Game Over!</div>
        )}
        <div className="mt-4 text-sm text-purple-300">
          Press spacebar to jump or click/tap the game area
        </div>
      </CardContent>
    </Card>
  );
}