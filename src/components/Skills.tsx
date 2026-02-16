export default function Skills() {
    const skillGroups = [
      {
        title: "Languages",
        items: ["Python", "TypeScript", "Java", "C++"],
      },
      {
        title: "Frameworks & Tools",
        items: ["React", "Next.js", "Node.js", "Docker"],
      },
      {
        title: "ML & Data",
        items: ["PyTorch", "scikit-learn", "Pandas", "SQL"],
      },
    ];
  
    return (
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-6">
                  {group.title}
                </h3>
  
                <ul className="space-y-3 text-gray-600">
                  {group.items.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  