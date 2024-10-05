import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-white h-[60vh] w-full bg-cover bg-center bg-gradient-to-br from-gray-900 to-black">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4 font-['Press_Start_2P'] uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 p-4 rounded-lg">
          Welcome to Gojirun!
        </h1>

        {/* Tagline */}
        <p className="text-lg mb-8 text-purple-300">
          A 2D platformer inspired by the classic Chrome T-Rex run.
        </p>

        {/* Play Now Button */}
        <Button
          asChild
          className="px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-lg font-bold rounded-full hover:from-purple-600 hover:to-pink-700 transition duration-300 shadow-lg animate-bounce"
        >
          <a href="#game">Play Now</a>
        </Button>

        {/* Giphy Embed */}
        <div className="mt-12">
          <iframe
            src="https://giphy.com/embed/YTzh3zw4mj1XpjjiIb"
            width="60"
            height="60"
            frameBorder="0"
            className="giphy-embed mx-auto"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}