"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, User, Trophy, HelpCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Gojirun
            </h1>
          </div>

          {/* Navbar Links */}
          <div className="ml-10 flex items-center space-x-4">
            {/* Profile Button */}
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
            >
              <User className="inline-block mr-2 h-4 w-4" />
              Profile
            </Button>

            {/* High Scores Button */}
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
            >
              <Trophy className="inline-block mr-2 h-4 w-4" />
              High Scores
            </Button>

            {/* Settings Button */}
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
            >
              <Settings className="inline-block mr-2 h-4 w-4" />
              Settings
            </Button>

            {/* Help Button */}
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
            >
              <HelpCircle className="inline-block mr-2 h-4 w-4" />
              Help
            </Button>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
