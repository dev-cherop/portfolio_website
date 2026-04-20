import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Blogpost API",
      description:
        "Scalable REST API built with Django REST Framework featuring JWT authentication, full CRUD operations, and optimized query performance for real-world applications.",
      tech_stack: ["Django", "REST API", "JWT", "PostgreSQL"],
      github_link: "https://github.com/dev-cherop/Blogpost_API",
      featured: true,
    },
    {
      id: 2,
      title: "Cuisine Recommendation Engine",
      description:
        "Machine learning system that predicts user cuisine preferences using data preprocessing and model integration with a Flask-based web interface.",
      tech_stack: ["Python", "Flask", "Scikit-learn"],
      github_link: "https://github.com/dev-cherop/cuisine-predictor",
    },
    {
      id: 3,
      title: "UFO Sightings App",
      description:
        "Data-driven web application for analyzing and exploring UFO sightings with filtering, sorting, and interactive UI features.",
      tech_stack: ["Flask", "SQLite", "Python"],
      github_link: "https://github.com/dev-cherop/ufo-sightings-app",
    },
    {
      id: 4,
      title: "Stock Checker",
      description:
        "Web app that integrates external APIs to fetch and display real-time stock data.",
      tech_stack: ["JavaScript", "API"],
      github_link:
        "https://github.com/dev-cherop/boilerplate-project-stockchecker",
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-12">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center">
        Projects
      </h2>

      {/* 🔥 Featured Project */}
      {featuredProject && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            FEATURED PROJECT
          </p>

          <h3 className="text-2xl font-bold">
            {featuredProject.title}
          </h3>

          <p className="text-gray-700 mt-3 max-w-2xl">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {featuredProject.tech_stack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-white text-gray-800 text-sm px-3 py-1 rounded shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={featuredProject.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 mt-4 font-medium hover:underline"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      )}

      {/* Other Projects */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-5 bg-white hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech_stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 mt-4 text-sm hover:underline"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}s
