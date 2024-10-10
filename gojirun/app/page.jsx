// "use client";
import Hero from "./sections/hero";
import Navigation from "./sections/navigation";
import Game from "./sections/game";
import Footer from "./sections/footer";
import ContributorsSection from "./sections/contributors";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Game />
      <ContributorsSection />
      <Footer />
    </>
  );
}
