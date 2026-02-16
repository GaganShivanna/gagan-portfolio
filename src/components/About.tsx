export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        <div className="text-gray-600 text-lg leading-relaxed space-y-6">
          <p>
            I’m a Computer Science graduate student driven by one goal:
            building systems that operate at scale, speed, and precision.
          </p>

          <p>
            My journey began with a strong foundation in mathematics and problem-solving,
            which evolved into designing intelligent software systems. From training
            computer vision models for automated inspection systems to developing
            blockchain-based platforms that enhance financial transparency,
            I focus on solving real-world problems with strong engineering principles.
          </p>

          <p>
            I’ve worked across backend development, cloud systems, deep learning,
            and decentralized technologies, building production-ready systems that
            process real-time data, integrate secure APIs, and maintain reliability
            under load.
          </p>

          <p>
            Currently, I am strengthening my expertise in backend architecture,
            distributed systems, and machine learning. My goal is to build
            high-performance systems in environments that demand excellence and scale.
          </p>

          <p className="font-medium text-gray-800">
            I don’t just write code. I build systems that last.
          </p>
        </div>
      </div>
    </section>
  );
}
