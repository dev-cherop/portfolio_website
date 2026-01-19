import { useEffect, useState } from "react";
// import API from "../services/api"; ❌ commented out
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  // ✅ Static projects (from earlier Tailwind version)
  const staticProjects = [
    {
      id: 1,
      title: "Cuisine Predictor",
      description: "ML app that predicts cuisine type from ingredients.",
      tech_stack: "HTML, Python, ML",
      github_link: "https://github.com/dev-cherop/cuisine-predictor",
      created_at: "2024-01-01",
    },
    {
      id: 2,
      title: "UFO Sightings App",
      description: "Predicts UFO sightings using trained ML models.",
      tech_stack: "CSS, Python, Flask",
      github_link: "https://github.com/dev-cherop/ufo-sightings-app",
      created_at: "2024-01-02",
    },
    {
      id: 3,
      title: "Stock Checker",
      description: "Checks stock prices using external APIs.",
      tech_stack: "JavaScript, API",
      github_link:
        "https://github.com/dev-cherop/boilerplate-project-stockchecker",
      created_at: "2024-01-03",
    },
    {
      id: 4,
      title: "Skin Detection System",
      description: "Detects skin conditions using image processing.",
      tech_stack: "HTML, Python",
      github_link:
        "https://github.com/dev-cherop/Skin_Detectention_System",
      created_at: "2024-01-04",
    },
    {
      id: 5,
      title: "Blogpost API",
      description: "RESTful API for managing blog posts.",
      tech_stack: "Python, Flask, API",
      github_link: "https://github.com/dev-cherop/Blogpost_API",
      created_at: "2024-01-05",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects.",
      tech_stack: "HTML, CSS, JavaScript",
      github_link: "https://github.com/dev-cherop/portfolio_website",
      created_at: "2024-01-06",
    },
  ];

  const [projects, setProjects] = useState(staticProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /*
  ❌ DATABASE FETCH COMMENTED OUT
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects/");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  */

  if (loading)
    return (
      <p className="text-center mt-6 text-gray-500">
        Loading projects...
      </p>
    );

  if (error)
    return (
      <p className="text-center mt-6 text-red-600">
        {error}
      </p>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-5 bg-white hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-600 mt-2 line-clamp-4">
              {project.description}
            </p>

            {project.tech_stack && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech_stack.split(",").map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}

            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 mt-4 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            )}

            <p className="text-xs text-gray-400 mt-3">
              Added on{" "}
              {new Date(project.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
