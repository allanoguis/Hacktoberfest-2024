"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "./ui/playerCard";
import { Badge } from "./ui/badge";
import { Medal } from "lucide-react";
import { Trophy } from "lucide-react";
import { Star } from "lucide-react";
export const Leaderboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_KEY}/api/leaderboard`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load leaderboard data."); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Check for error and display message
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center text-white">
        <ul className="flex flex-col gap-4">
          {data &&
            data.leaderboard
              .sort((a, b) => b.score - a.score)
              .slice(0, 50)
              .map((game, index) => (
                <li key={game.id}>
                  <Badge variant="default" className="text-sm">
                    {(() => {
                      const badgeLabels = {
                        0: (
                          <>
                            <Trophy className="w-6 h-6 mr-2 animate-pulse" />{" "}
                            CHAMPION
                          </>
                        ),
                        1: (
                          <>
                            <Medal className="w-6 h-6 mr-2 animate-pulse" />{" "}
                            CHALLENGER
                          </>
                        ),
                        2: (
                          <>
                            <Star className="w-6 h-6 mr-2 animate-pulse" />{" "}
                            RUNNER-UP
                          </>
                        ),
                      };
                      return badgeLabels[index] || " ";
                    })()}
                  </Badge>
                  <Card>
                    <CardTitle>
                      <Badge variant="secondary">{index + 1}</Badge>
                    </CardTitle>
                    <CardHeader>score: {game.score}</CardHeader>
                    <CardContent>
                      name: {game.playerName || "Tester"}
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Leaderboard;
