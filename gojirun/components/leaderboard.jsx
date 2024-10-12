"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/playerCard";

export const Leaderboard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <span>Player Avatar</span>
        </CardHeader>
        <CardContent>
          <span>Player Score details</span>
        </CardContent>
        <CardFooter>
          <span>Player Email</span>
        </CardFooter>
      </Card>
    </>
  );
};

export default Leaderboard;
