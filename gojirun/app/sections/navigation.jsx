"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, User, Trophy, HelpCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="bg-gray-900 border-gray-700 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mb-0">
          {/* Game Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gojirun</h1>
          </div>

          {/* Navbar Links */}
          <div className="ml-10 flex items-center space-x-4">
            {/* Profile Button */}

            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
              <User className="inline-block mr-2 h-4 w-4" />
              Profile
            </button>

            {/* High Scores Button */}
            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">

            <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500">
              <User className="inline-block mr-2 h-4 w-4" />
              Profile
            </Button>
            
            {/* High Scores Button */}
            <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500">

              <Trophy className="inline-block mr-2 h-4 w-4" />
              High Scores
            </Button>

            {/* Settings Button */}

            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">

            <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500">

              <Settings className="inline-block mr-2 h-4 w-4" />
              Settings
            </Button>

            {/* Help Button */}

            <button className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">

            <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500">

              <HelpCircle className="inline-block mr-2 h-4 w-4" />
              Help
            </Button>

            {/* Theme Toggle Button */}

            <button
              className="text-white px-3 py-2 rounded-md text-sm font-medium"

            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-500"

              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-transform" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-transform" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}