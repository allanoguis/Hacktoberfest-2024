"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Trophy, HelpCircle, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 border-gray-700 w-full mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mb-0">
          {/* Game Title */}
          <Link href={'/'}>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Gojirun
              </h1>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-purple-300 hover:text-white focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex ml-10 items-center space-x-4">
            {/* High Scores Button */}
            <Link href={'/highscores'}>
              <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300">
                <Trophy className="inline-block mr-2 h-4 w-4" />
                High Scores
              </Button>
            </Link>

            {/* Settings Button */}
            <Link href={'/settings'}>
              <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300">
                <Settings className="inline-block mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>

            {/* Help Button */}
            <Link href={'/help'}>
              <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300">
                <HelpCircle className="inline-block mr-2 h-4 w-4" />
                Help
              </Button>
            </Link>

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

            <UserButton />
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 sm:px-3">
              <Link href={'/highscores'}>
                <Button
                  variant="ghost"
                  className="w-full text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
                >
                  <Trophy className="inline-block mr-2 h-4 w-4" />
                  High Scores
                </Button>
              </Link>
              <Link href={'/settings'}>
                <Button
                  variant="ghost"
                  className="w-full text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
                >
                  <Settings className="inline-block mr-2 h-4 w-4" />
                  Settings
                </Button>
              </Link>
              <Link href={'/help'}>
                <Button
                  variant="ghost"
                  className="w-full text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
                >
                  <HelpCircle className="inline-block mr-2 h-4 w-4" />
                  Help
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="w-full text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <div className="w-full text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300">
                <UserButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
