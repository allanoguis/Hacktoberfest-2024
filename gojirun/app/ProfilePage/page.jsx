"use client";
import React, { useState, useEffect } from "react";
import Navigation from "../sections/navigation";
import { useUser } from "@clerk/nextjs";
import { fetchHighScore } from "@/api/getHighScoreAPI/route";

export default function ProfilePage() {
  const { isLoaded, isSignedIn, user } = useUser();

  const uname = isLoaded && isSignedIn && user ? user.firstName : "Guest";
  const uemail =
    isLoaded && isSignedIn && user && user.emailAddresses.length > 0
      ? user.emailAddresses[0].emailAddress
      : "Guest email";
  const uimage =
    isLoaded && isSignedIn && user
      ? user.imageUrl
      : "https://nosrc.net/100x100";
  const ucd =
    isLoaded && isSignedIn && user && user.createdAt
      ? new Date(user.createdAt).toLocaleDateString()
      : "DD/MM/YYYY";
  const uls =
    isLoaded && isSignedIn && user && user.lastSignInAt
      ? new Date(user.lastSignInAt).toLocaleDateString()
      : "DD/MM/YYYY";

  const [highscore, setHighscore] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isSignedIn && user) {
      getHighScore();
    }
  }, [isSignedIn, user]);

  const getHighScore = async () => {
    try {
      const res = await fetchHighScore({ playerId: user.id });
      if (res.topGame) {
        setHighscore(res.topGame.score);
      }
    } catch (err) {
      console.error("Error fetching high score:", err);
      setError("Failed to fetch high score");
    }
  };

  return (
    <>
      <Navigation />
      <div className="max-w-lg mx-auto my-10 p-1 justify-center items-center">
        <header className="flex items-center pb-5">
          <img
            src={uimage}
            alt={uname}
            className="w-20 h-20 rounded-full ml-2 mr-10"
          />
          <div>
            <h1 className="font-semibold text-2xl m-0">{uname}</h1>
            <p className="font-light text-sm m-0">{uemail}</p>{" "}
            {/* Fixed Email */}
          </div>
        </header>

        <div className="grid grid-cols-3 gap-5 justify-between mb-5 text-white">
          <div className="p-1 m-1 rounded-lg text-center bg-chart-2">
            <p>createdAt</p>
            <p>{ucd}</p> {/* Fixed Date rendering */}
          </div>
          <div className="p-1 m-1 rounded-lg text-center bg-chart-2">
            <p>lastSignInAt</p>
            <p>{uls}</p> {/* Fixed Date rendering */}
          </div>
          <div className="p-1 m-1 rounded-lg text-center bg-chart-2">
            <p>High Score</p>
            <p>{error || highscore}</p>
          </div>
        </div>
      </div>
    </>
  );
}
