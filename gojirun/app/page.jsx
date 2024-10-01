import React from "react";
import Navigation from "./sections/navigation/page";
import Hero from "./sections/hero/page";
import Game from "./sections/game/page";
import CollaboratorsSection from "./sections/collaborators/page";
import Footer from "./sections/footer/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen p-0 gap-16 font-[family-name:var(--font-geist-sans)]">
      <>
        <Navigation />
      </>
      <section>
        <Hero />
      </section>
      <section>
        <Game />
      </section>
      <section>
        <CollaboratorsSection />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
