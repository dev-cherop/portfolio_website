
import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaLayerGroup,
  FaBrain,
  FaLaptopCode,
  FaServer,
  FaCut,
  FaBookOpen,
  FaGraduationCap,
  FaMicroscope,
  FaUtensils,
  FaChartLine,
  FaMapMarkedAlt,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Saloon SAS System",
    category: "Full-Stack Development",
    description:
      "A salon management system designed to simplify business operations, customer management and daily activities.",
    technologies: ["Python", "Full-Stack Development"],
    github: "https://github.com/dev-cherop/saloon-sas-system",
    featured: true,
    icon: FaCut,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Blogpost REST API",
    category: "Backend Engineering",
    description:
      "A RESTful backend application built with Django REST Framework featuring JWT authentication, CRUD operations and structured API endpoints.",
    technologies: ["Python", "Django", "REST API", "JWT", "PostgreSQL"],
    github: "https://github.com/dev-cherop/Blogpost_API",
    icon: FaBookOpen,
    color: "text-emerald-400",
  },
  {
    id: 3,
    title: "Student Performance Predictor",
    category: "Machine Learning",
    description:
      "A predictive application that estimates student Mathematics scores using educational and demographic information.",
    technologies: ["Python", "Flask", "Scikit-learn", "Pandas"],
    github: "https://github.com/dev-cherop/Student_Performance_predictor",
    icon: FaGraduationCap,
    color: "text-purple-400",
  },
  {
    id: 4,
    title: "Skin Detection System",
    category: "AI & Machine Learning",
    description:
      "A machine learning project focused on skin lesion classification using image processing and predictive workflows.",
    technologies: [
      "Python",
      "Django",
      "Machine Learning",
      "Image Processing",
    ],
    github: "https://github.com/dev-cherop/Skin_Detectention_System",
    icon: FaMicroscope,
    color: "text-cyan-400",
  },
  {
    id: 5,
    title: "Cuisine Recommendation Engine",
    category: "Machine Learning",
    description:
      "A machine learning application for analyzing data and predicting cuisine preferences through a Flask-based interface.",
    technologies: ["Python", "Flask", "Scikit-learn", "Pandas"],
    github: "https://github.com/dev-cherop/cuisine-predictor",
    icon: FaUtensils,
    color: "text-orange-400",
  },
  {
    id: 6,
    title: "Stock Checker",
    category: "Frontend & JavaScript",
    description:
      "A JavaScript application integrating external APIs to retrieve and display stock information dynamically.",
    technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
    github:
      "https://github.com/dev-cherop/boilerplate-project-stockchecker",
    icon: FaChartLine,
    color: "text-green-400",
  },
  {
    id: 7,
    title: "UFO Sightings Application",
    category: "Web Development",
    description:
      "A data-driven application for exploring UFO sightings through filtering, sorting and interactive data presentation.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    github: "https://github.com/dev-cherop/ufo-sightings-app",
    icon: FaMapMarkedAlt,
    color: "text-indigo-400",
  },
];

const categories = [
  { name: "All Projects", icon: FaLayerGroup },
  { name: "Full-Stack Development", icon: FaCode },
  { name: "Backend Engineering", icon: FaServer },
  { name: "Machine Learning", icon: FaBrain },
  { name: "Frontend & JavaScript", icon: FaLaptopCode },
  { name: "Web Development", icon: FaLaptopCode },
];

function ProjectPreview({ project }) {
  const Icon = project.icon;

  return (
    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 border-b border-slate-800 p-6">
      <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative h-full flex flex-col justify-between">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center">
              <Icon className={`${project.color} text-2xl`} />
            </div>

            <div className="min-w-0">
              <p className="text-white text-sm font-bold truncate">
                {project.title}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Project Preview
              </p>
            </div>
          </div>

          <div className="flex gap-1 shrink-0">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-950/80 border border-slate-700 rounded-xl p-4">
            <p className="text-slate-500 text-xs">Technology</p>
            <p className="text-white text-sm font-semibold mt-2">
              {project.technologies[0]}
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-700 rounded-xl p-4">
            <p className="text-slate-500 text-xs">Category</p>
            <p className="text-blue-400 text-sm font-semibold mt-2">
              {project.category}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-xs">
            DEV-CHEROP
          </span>
          <span className="text-blue-400 text-xs">
            Portfolio Project
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
      <ProjectPreview project={project} />

      <div className="flex flex-col flex-grow p-6">
        <span className="self-start text-xs text-blue-400 bg-blue-400/10 px-3 py-2 rounded-full mb-4">
          {project.category}
        </span>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-7 mt-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-3 py-2 rounded-md"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-7 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition"
          >
            <FaGithub className="text-lg" />
            View Source
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const featured = projects.find((project) => project.featured);

  const filteredProjects = projects.filter((project) => {
    if (project.featured) return false;

    if (activeCategory === "All Projects") return true;

    if (activeCategory === "Machine Learning") {
      return (
        project.category === "Machine Learning" ||
        project.category === "AI & Machine Learning"
      );
    }

    return project.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
              My Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
              Projects &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions.
              </span>
            </h1>

            <p className="text-slate-400 mt-6 leading-8 text-lg">
              A collection of applications and technical projects
              demonstrating my work in full-stack development,
              backend engineering, frontend technologies and
              machine learning.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-400">
              <span>{projects.length} Projects</span>
              <span>Python & Django</span>
              <span>React & JavaScript</span>
              <span>Machine Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      {featured && activeCategory === "All Projects" && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Featured Project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 border border-blue-500/30 rounded-3xl p-6 md:p-10">
            <ProjectPreview project={featured} />

            <div>
              <p className="text-blue-300 text-sm mb-4">
                {featured.category}
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                {featured.title}
              </h2>

              <p className="text-slate-300 leading-8 mt-6">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {featured.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                <FaGithub />
                Explore Repository
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* PROJECT FILTERS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-8">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            Portfolio Showcase
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Explore My Work
          </h2>

          <p className="text-slate-400 text-sm mt-3">
            Browse projects by technical area.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCategory(name)}
              aria-pressed={activeCategory === name}
              className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm border transition ${
                activeCategory === name
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-slate-900 border-slate-700 text-slate-400 hover:border-blue-500 hover:text-white"
              }`}
            >
              <Icon />
              {name}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-400 text-sm">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredProjects.length}
            </span>{" "}
            projects
          </p>

          {activeCategory !== "All Projects" && (
            <button
              type="button"
              onClick={() => setActiveCategory("All Projects")}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-slate-800 rounded-2xl">
            <FaLayerGroup className="text-4xl text-slate-600 mx-auto mb-5" />
            <h3 className="text-xl font-bold">
              No projects found
            </h3>
            <p className="text-slate-400 mt-3">
              No projects are available in this category.
            </p>
          </div>
        )}
      </section>

      {/* GITHUB CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center border border-slate-800 bg-slate-900/60 rounded-3xl p-10 md:p-16">
          <FaGithub className="text-5xl mx-auto text-blue-400 mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Explore More of My Code.
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-7">
            Visit my GitHub profile to explore my repositories,
            development work and ongoing projects.
          </p>

          <a
            href="https://github.com/dev-cherop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-lg font-semibold mt-8 transition"
          >
            <FaGithub />
            Visit My GitHub
            <FaArrowRight />
          </a>
        </div>
      </section>

    </div>
  );
}
