"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Trophy,
  Moon,
  Sun,
  CircleUser,
  GitPullRequestArrow,
  LucideHome,
  Joystick,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

// import axios from "axios"; // For making API requests

export default function Navigation() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isLoaded, isSignedIn, user } = useUser(); // Use Clerk's useUser hook to detect sign-in
  const username = isLoaded && isSignedIn && user ? user.firstName : "Guest";

  useEffect(() => {
    setMounted(true);
  }, []);

  const navRef = useRef(null); // testrefhook toscrollup

  useEffect(() => {
    if (isLoaded && navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth" }); // refhook toscrollup
    }
  }, [isLoaded]); // Dependency array includes isLoaded

  // Trigger the API call when the user signs in
  useEffect(() => {
    const fetchData = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          //  const backendURL = process.env.NEXT_PUBLIC_API_KEY;

          const data = {
            userId: user.id || "000000", // User ID
            email: user.emailAddresses?.[0]?.emailAddress || "No Email", // Email address
            fullname: user.fullName || "No Name", // Full name
            profileImageUrl: user.imageUrl || "",
            createdAt: user.createdAt, // User account creation timestamp
            lastSignInAt: user.lastSignInAt, // Last sign-in timestamp
          };

          // Make API call to your backend
          // const response = await axios.post(`${backendURL}/api/users`, data); // POST request to /api/users

          console.log(data);
        } catch (error) {
          console.error("Error calling API:", error);
        }
      }
    };

    fetchData();
  }, [isLoaded, isSignedIn, user]); // Depend on `isSignedIn` and `isLoaded` for reactivity

  if (!mounted) {
    return null;
  }

  const Home = () => {
    router.push("/");
  };

  const Start = () => {
    router.push("/pages/game");
  };

  const profilePage = () => {
    router.push("/pages/profile");
  };

  const highscorePage = () => {
    router.push("/pages/leaderboard");
  };

  const contributorsPage = () => {
    router.push("/pages/contributors");
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 flex container z-50 h-20 min-w-full px-8 justify-between items-center bg-transparent"
      >
        {/* User Area */}
        <div className="flex-shrink-0 inline-flex items-center">
          <div className="mr-3">
            <span className="text-sm sm:text-base">
              Player logged in: {username}
            </span>
          </div>
          <div className="flex items-center">
            {/* User Authentication */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
          </div>
        </div>

        {/* Navbar Links */}
        <div className="flex flex-initial space-x-2 items-center">
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-300"
            onClick={Home}
          >
            <LucideHome className="inline-block mr-2 h-4 w-4" />
            Home
          </Button>

          {/* Profile Button */}
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-300"
            onClick={Start}
          >
            <Joystick className="inline-block mr-2 h-4 w-4" />
            Play The Game
          </Button>

          {/* Profile Button */}
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-300"
            onClick={profilePage}
          >
            <CircleUser className="inline-block mr-2 h-4 w-4" />
            Profile
          </Button>

          {/* High Scores Button */}
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-300"
            onClick={highscorePage}
          >
            <Trophy className="inline-block mr-2 h-4 w-4" />
            Leaderboard
          </Button>

          {/* Contributors Button */}
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-300"
            onClick={contributorsPage}
          >
            <GitPullRequestArrow className="inline-block mr-2 h-4 w-4" />
            Contributors
          </Button>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-500"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <div className="relative h-[1.2rem] w-[1.2rem]">
              {theme === "light" ? (
                <Sun className="absolute h-full w-full transition-all" />
              ) : (
                <Moon className="absolute h-full w-full transition-all" />
              )}
            </div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </>
  );
}
