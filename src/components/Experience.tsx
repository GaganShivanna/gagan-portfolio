"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Viterbi Graduate Orientation Leader",
      company: "University of Southern California",
      duration: "Dec 2025 – Present",
      points: [
        "Guided incoming graduate students through orientation, providing structured support on academic resources, campus systems, and student life.",
        "Supported international students in navigating cultural adaptation and university processes, ensuring a smooth transition into the community.",
        "Collaborated with faculty, staff, and fellow leaders to coordinate orientation activities and improve program effectiveness.",
      ],
    },
    {
      role: "Campus Ambassador",
      company: "Rooman Technologies",
      duration: "Sept 2024 – Feb 2025",
      points: [
        "Represented the organization on campus, acting as the primary point of contact between students and the core team.",
        "Led a team of student volunteers to plan and execute technical and networking events.",
        "Increased student engagement by driving awareness campaigns through strategic outreach and social media promotion.",
        "Coordinated cross-functional communication between event sponsors, organizers, and campus administration.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Supraja Technologies",
      duration: "Feb 2024 – July 2024",
      points: [
        "Built and deployed a backend module for an Automatic Malicious Website Blocker Chrome extension, handling 200+ malicious URLs and reducing page load latency by 30%.",
        "Designed and implemented RESTful APIs and Python microservices in collaboration with a team of 4 engineers, fixing 15+ critical security vulnerabilities and improving system reliability.",
        "Optimized network request handling using asynchronous processing and request batching. Implemented security mitigations against ARP Poisoning and Clickjacking, reducing the attack surface by 85%.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Cranes Varsity",
      duration: "March 2023 – July 2023",
      points: [
        "Collaborated with hardware engineers to develop Python-based sensor services for real-time cloud integration, streaming 100+ data points per second with zero downtime.",
        "Designed and deployed a cloud-based leak alert system, reducing detection response time by 70% through optimized event processing and alert pipelines.",
        "Diagnosed and resolved 15+ cloud synchronization and deployment issues, improving system reliability, fault tolerance, and production stability.",
      ],
    },
  ];
  

  return (
    <section id="experience" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-24">
          Experience
        </h2>

        <div className="relative">

          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-orange-400 hidden md:block"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-md z-10 hidden md:block" />

                  <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-full md:w-5/12 ${
                      isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      {exp.role}
                    </h3>

                    <p className="text-orange-500 font-medium mb-1">
                      {exp.company}
                    </p>

                    <p className="text-sm text-gray-500 mb-6">
                      {exp.duration}
                    </p>

                    <ul className="space-y-3 text-gray-600">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
