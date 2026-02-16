export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "C", "SQL", "Solidity", "JavaScript"],
    },
    {
      title: "Backend & Web Development",
      skills: [
        "React",
        "Node.js",
        "Django",
        "GraphQL",
        "REST APIs",
        "Auth0",
        "Stripe API",
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Image Processing",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "OpenCV",
        "NLTK",
        "YOLOv5",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Gradio",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "Terraform",
        "Git",
      ],
    },
    {
      title: "Blockchain & Web3",
      skills: [
        "Ethereum",
        "Solidity",
        "Metamask",
        "Ganache",
        "Truffle",
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-6 text-orange-500">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white rounded-full text-sm shadow-sm border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
