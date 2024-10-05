"use client";
import Hero from "./sections/hero";
import Navigation from "./sections/navigation";
import Game from "./sections/game";
import Footer from "./sections/footer";
import ContributorsSection from "./sections/contributors";

export default function Home() {
  return (

      <div className="flex flex-col items-center justify-items-center p-0 font-[family-name:var(--font-geist-sans)]">
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
          <ContributorsSection />
        </>
        <>
          <Footer />
        </>
      </div>

  );
}
