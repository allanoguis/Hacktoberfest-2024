"use client";
import { ThemeProvider } from "next-themes";
import Hero from "./sections/hero/page";
import Navigation from "./sections/navigation/page";
import Game from "./sections/game/page";
import Footer from "./sections/footer/page";
import CollaboratorsPage from "./sections/collaborators/page";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-items-center min-h-screen p-0  font-[family-name:var(--font-geist-sans)]">
        <>
          <Navigation />
        </>
        <>
          <Hero />
        </>
        <>
          <Game />
        </>
        <>
          <CollaboratorsPage />
        </>
        <>
          <Footer />
        </>
      </div>
    </ThemeProvider>
  );
}
