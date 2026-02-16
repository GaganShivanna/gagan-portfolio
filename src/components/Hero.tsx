export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Hi, I&apos;m <span className="text-orange-500">Gagan Shivanna</span>
          </h1>

          <h2 className="text-2xl text-gray-600 mb-6">
            Software Engineer | AI & Machine Learning Enthusiast
          </h2>

          <p className="text-gray-500 text-lg mb-8 max-w-xl leading-relaxed">
            I am a passionate software engineer with a strong interest in artificial intelligence,
            machine learning, and web development. I enjoy building impactful projects that solve
            real-world problems and continuously exploring emerging technologies to stay ahead in
            the evolving tech landscape.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-gray-200 rounded-full shadow-xl"></div>
        </div>

      </div>
    </section>
  );
}
