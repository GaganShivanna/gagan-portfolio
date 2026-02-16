"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon – Grand Finale Winner",
      highlight: "#1 out of 500 finalist teams",
      description:
        "Led Team Pegasus to first place in the Blockchain domain, shortlisted from over 50,000 teams nationwide.",
      image: "/Achievements/SIH.jpeg",
    },
    {
      title: "FKCCI Manthan Business Plan – Top 25",
      highlight: "Top 25 out of 400 teams",
      description:
        "Recognized for designing Secure Sky Connect, a drone-based blood delivery solution integrating blockchain.",
      image: "/Achievements/Manthan.png",
    },
    {
      title: "Origin Impact Weekend – Winner",
      highlight: "USC TiE Hub | Sponsored by Google",
      description:
        "Led a cross-functional team to build and present a rapid prototype within 48 hours, securing first place at Origin Impact Weekend.",
      image: "/Achievements/Origin.jpg",
    },
  ];

  return (
    <section
  id="achievements"
  className="py-32"
  style={{
    background: "linear-gradient(180deg, #FFF9E6 0%, #F2B50B22 100%)",
  }}
>

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

        {achievements.map((item, index) => {
  const isLast = index === achievements.length - 1;
  const isOdd = achievements.length % 2 !== 0;

  return (
    <div
      key={index}
      className={`${
        isOdd && isLast ? "md:col-span-2 flex justify-center" : ""
      }`}
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
        >
          {/* Image */}
          <div className="relative w-full h-64 bg-white flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="h-1 bg-orange-500"></div>

          <div className="p-8">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              {item.title}
            </h3>

            <p className="font-medium text-gray-800 mb-4">
              {item.highlight}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
})}

          
        </div>

      </div>
    </section>
  );
}
