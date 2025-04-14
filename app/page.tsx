import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-7xl mx-auto pt-32">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            I help founders turn ideas into seamless{" "}
            <span className="font-playfair italic font-medium tracking-wide bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mt-50 mb-8">
            <p className="text-xl text-gray-200">
              Hello, I'm Austin Pugliese
            </p>
            <div className="h-8 w-8 rounded-full bg-indigo-600 border border-white/20"></div>
            <p className="text-xl text-gray-200">
              a Full Stack Developer
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/10"
            >
              Let's Connect
              <span className="text-gray-200">→</span>
            </a>
            <a
              href="mailto:austinpugliese917@gmail.com"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-xl">📧</span>
              austinpugliese917@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
