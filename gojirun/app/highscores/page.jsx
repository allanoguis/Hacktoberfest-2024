"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react"; // Import useUser from Clerk

function HighScores() {
  const { user } = useUser(); // Get user information from Clerk
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Retrieve the scores from localStorage
    const savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
    
    // Sort scores in descending order
    const sortedScores = savedScores.sort((a, b) => b - a);

    // Update state with sorted scores
    setHighScores(sortedScores);
  }, []);

  // Get the highest score, if available
  const highestScore = highScores.length > 0 ? highScores[0] : null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user && (
        <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 text-center">
          <h3 className="text-xl font-bold text-purple-500">{user.fullName}</h3>
          <p className="text-md text-purple-500">{user.email}</p>
        </div>
      )}
      
      <h2 className="text-3xl font-bold mb-4">High Score</h2>
      {highestScore !== null ? (
        <div className="bg-purple-200 rounded-lg p-6 shadow-md">
          <p className="text-2xl font-semibold text-purple-800">{highestScore}</p>
        </div>
      ) : (
        <p className="text-lg">No high scores yet!</p>
      )}
    </div>
  );
}

export default HighScores;
