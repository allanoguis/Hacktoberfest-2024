import Hero from "./sections/hero/page";
import Navigation from "./sections/navigation/page";
import Game from "./sections/game/page";
import Footer from "./sections/footer/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-0 gap-16 font-[family-name:var(--font-geist-sans)]">
      <>
        <Hero />
      </>
      <>
        <Game />
      </>
      <>
        <Footer />
      </>
    </div>
  );
}
