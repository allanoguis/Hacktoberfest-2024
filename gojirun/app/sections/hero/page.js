export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-white h-[60vh] w-[100vw] bg-cover bg-center bg-[url('/')]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4 font-['Press_Start_2P'] uppercase bg-black bg-opacity-50 p-4 rounded-lg">
          Welcome to Gojirun!
        </h1>
        
        {/* Tagline */}
        <p className="text-lg mb-8 text-gray-300">A 2D platformer inspired by the classic Chrome T-Rex run.</p>

        {/* Play Now Button */}
        <a 
          href="#play" 
          className="px-8 py-4 bg-blue-600 text-lg font-bold rounded-full hover:bg-blue-500 transition duration-300 shadow-lg animate-bounce"
        >
          Play Now
        </a>

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
          <p>
            <a href="https://giphy.com/gifs/metadigital-meta-web-design-digital-YTzh3zw4mj1XpjjiIb">
              
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
