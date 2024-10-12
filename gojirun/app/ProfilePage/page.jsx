"use client";
import React, { useState } from "react";
import Navigation from "../sections/navigation";

const styles = {
  avatar: {},
};

export default function ProfilePage() {
  const [user, setUser] = useState({
    email: "John@example.com",
    fullName: "John Doe",
    profileImageUrl: "https://nosrc.net/100x100",
    level: 42,
    experiencePoints: 8700,
    totalExperiencePoints: 10000,
    achievements: [
      "First Win",
      "Reach Level 10",
      "Complete Tutorial",
      "Win 100 Games",
    ],
    recentActivity: [
      "Won a match in Fortnite",
      "Completed daily quest in World of Warcraft",
      "Reached level 30 in League of Legends",
      "Unlocked new character in Genshin Impact",
    ],
  });

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  return (
    <>
      <Navigation />
      <div className="max-w-lg mx-auto my-10 p-1 justify-center items-center">
        <header className="flex items-center pb-5">
          <img
            src={user.profileImageUrl}
            alt={user.fullName}
            className="w-100 h-100 rounded-full ml-2 mr-10"
          />
          <div>
            <h1 className="font-semibold text-2xl m-0">{user.fullName}</h1>
            <p className="font-light text-sm m-0">{user.email}</p>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-5 justify-between mb-5 text-white">
          <div className="p-1 m-1 rounded-lg text-center bg-chart-2">
            <p>Level</p>
            <p>{user.level}</p>
          </div>
          <div className="p-1 m-1 rounded-lg text-center bg-chart-2">
            <p>Experience</p>
            <p>{`${user.experiencePoints} / ${user.totalExperiencePoints}`}</p>
          </div>
          <div className="p-1 m-1 rounded-lg text-center bg-chart-2">
            <p>Achievements</p>
            <p>{user.achievements.length}</p>
          </div>
        </div>

        <section className="mb-2">
          <h2 className="text-lg font-semibold mb-5">Achievement List</h2>
          <ul className="flex flex-col w-full justify-start text-center list-none p-0 gap-5 text-white">
            {user.achievements.map((achievement, index) => (
              <li
                key={index}
                className="w-1/3 p-2 rounded-full bg-card-foreground"
              >
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        <section className="my-5">
          <h2 className="text-lg font-semibold mb-5">Recent Activity</h2>
          <ul className="list-none p-0">
            {user.recentActivity.map((activity, index) => (
              <li key={index} className="pb-2 border-b border-foreground mb-5">
                {activity}
              </li>
            ))}
          </ul>
        </section>

        <button
          onClick={handleLogout}
          className="my-5 bg-chart-1 text-white rounded-lg p-2 w-full hover:bg-accent transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </>
  );
}
