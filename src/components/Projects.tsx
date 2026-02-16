import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Blockchain-Based Financial Transparency for NGOs",
      tech: ["Solidity", "Ethereum", "Truffle", "Ganache", "React"],
      description:
        "Built a decentralized platform ensuring financial transparency for NGOs by recording donations on blockchain with government-verified registration and full donor visibility.",
      image: "/projects/Blockchain.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Automated PCB Defect Detection",
      tech: ["Python", "YOLOv5", "OpenCV", "Gradio", "React"],
      description:
        "Developed an automated optical inspection system to detect PCB defects with efficient classification and detailed reporting.",
      image: "/projects/PCB.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Mulberry Leaf Deficiency Detection",
      tech: ["Python", "Keras", "Image Processing"],
      description:
        "Built a machine learning model to detect leaf deficiencies, helping farmers improve crop yield through early detection.",
      image: "/projects/Mulberry.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Scalable E-Commerce Platform",
      tech: ["React", "Django", "REST", "Auth0", "Razorpay"],
      description:
        "Architected a scalable full-stack e-commerce system supporting secure payments and high concurrent transactions.",
      image: "/projects/dropship.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Sentiment Analysis System",
      tech: ["Python", "NLTK", "Scikit-learn", "Flask"],
      description:
        "Implemented a sentiment classification system for analyzing customer feedback and social media opinions.",
      image: "/projects/sentiment.jpeg",
      github: "#",
      demo: "#",
    },
    {
      title: "Secure Sky Connect – Blood Delivery App",
      tech: ["Flutter", "Firebase", "Blockchain", "Map API"],
      description:
        "Created a drone-based emergency blood delivery system integrating blockchain for secure tracking and transparency.",
      image: "/projects/coast.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Blocking Malicious Websites – Browser Extension",
      tech: ["Python", "URL Filtering", "Cybersecurity APIs"],
      description:
        "Developed a browser extension that enhances online safety by blocking phishing and malicious websites.",
      image: "/projects/Malicious.jpg",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-orange-100 text-orange-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-700 hover:text-orange-500 transition"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
                  >
                    <FiExternalLink />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
