export default function Projects() {
    const projects = [
      {
        title: "Production ML Service",
        description:
          "End-to-end ML system with training pipeline, REST API, monitoring, and CI/CD.",
        tech: "Python • FastAPI • Docker • AWS",
      },
      {
        title: "LLM Fine-Tuning Application",
        description:
          "Built domain-specific question answering system using fine-tuned transformer models.",
        tech: "PyTorch • HuggingFace • React",
      },
      {
        title: "Distributed Backend System",
        description:
          "Designed scalable microservices architecture with authentication and logging.",
        tech: "Node.js • PostgreSQL • Docker",
      },
    ];
  
    return (
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projects
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>
  
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
  
                <p className="text-sm text-orange-500 font-medium">
                  {project.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  