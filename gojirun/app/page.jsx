// "use client";
import { Suspense } from "react";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <Suspense>
      <>
        <Hero />
      </>
    </Suspense>
  );
}
