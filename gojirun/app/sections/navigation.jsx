"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, User, Trophy, HelpCircle, Settings } from "lucide-react";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-black border-gray-700 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mb-0">
          {/* Game Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Dino Game</h1>
          </div>

          {/* Navbar Links */}
          <div className="ml-10 flex items-center space-x-8">
            {/* Profile Button */}
            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
              <User className="inline-block mr-2 h-4 w-4" />
              Profile
            </button>

            {/* High Scores Button */}
            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
              <Trophy className="inline-block mr-2 h-4 w-4" />
              High Scores
            </button>

            {/* Settings Button */}
            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
              <Settings className="inline-block mr-2 h-4 w-4" />
              Settings
            </button>

            {/* Help Button */}
            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
              <HelpCircle className="inline-block mr-2 h-4 w-4" />
              Help
            </button>

            {/* Theme Toggle Button */}
            <button
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-transform" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-transform" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
