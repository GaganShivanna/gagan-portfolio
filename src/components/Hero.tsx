"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-orange-500">
              Gagan Shivanna
            </span>
          </h1>

          <h2 className="text-2xl text-gray-600 mb-6">
            Software Engineer | AI & Machine Learning Enthusiast
          </h2>

          <p className="text-gray-500 text-lg mb-8 max-w-xl leading-relaxed">
            I am a passionate software engineer with a strong interest in
            artificial intelligence, machine learning, and web development.
            I enjoy building impactful projects that solve real-world problems
            and continuously exploring emerging technologies.
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

        <div className="flex justify-center">
  <div className="relative w-80 h-[420px]">

    {/* Animated Spike Border */}
    <div className="absolute inset-0 rounded-2xl p-[3px] overflow-hidden">
      <div
        className="absolute inset-[-150%]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #f97316 20deg, transparent 40deg, #ec4899 60deg, transparent 80deg, #8b5cf6 100deg, transparent 120deg, #f97316 140deg, transparent 360deg)",
          animation: "rotateBorder 4s linear infinite",
        }}
      />
    </div>

    {/* Inner Image Container */}
    <div className="absolute inset-[3px] rounded-2xl overflow-hidden bg-white">
      <Image
        src="/profile.png"
        alt="Gagan Shivanna"
        fill
        priority
        className="object-cover"
      />
    </div>

    {/* Depth Shadow */}
    <div className="absolute inset-0 rounded-2xl shadow-2xl pointer-events-none"></div>

  </div>
</div>




      </div>
    </section>
  );
}
