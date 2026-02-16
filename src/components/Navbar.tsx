"use client";

import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
      />

      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-sm z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-orange-500">
            Gagan Shivanna
          </h1>

          <div className="hidden md:flex space-x-6">
          {["Home","About","Experience","Achievements","Skills","Projects","Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
