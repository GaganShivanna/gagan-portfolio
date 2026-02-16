"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
            Let&apos;s work together!
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi,
              I&apos;ll do my best to get back to you.
            </p>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>gshivann@usc.edu</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin className="text-orange-500" />
                <span>Los Angeles, CA</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">🎓</span>
                <span>University of Southern California</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/GaganShivanna"
                target="_blank"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/gagshiv/"
                target="_blank"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-600 mb-8">
              Click the button below to send me a message.
            </p>

            <a
              href="https://forms.google.com"
              target="_blank"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Send Message
            </a>

            <p className="text-sm text-gray-500 mt-6 italic">
              This will open a secure form in a new tab.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
