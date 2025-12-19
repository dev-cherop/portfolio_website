import React from "react";
import { FaPython, FaReact, FaDatabase, FaDocker, FaLinux, FaNetworkWired } from "react-icons/fa";
import { SiTensorflow, SiScikitlearn, SiPostgresql, SiFastapi, SiDjango, SiTailwindcss } from "react-icons/si";

const SKILLS = [
  { icon: FaPython, label: "Python" },
  { icon: SiDjango, label: "Django" },
  { icon: SiFastapi, label: "FastAPI / REST" },
  { icon: FaReact, label: "React" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: FaDocker, label: "Docker" },
  { icon: FaNetworkWired, label: "CCNA / Networking" },
  { icon: SiTensorflow, label: "TensorFlow" },
  { icon: SiScikitlearn, label: "Scikit-learn" },
  { icon: FaLinux, label: "Linux / CLI" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
];

const SkillBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition">
    <Icon className="text-blue-600 text-xl" />
    <span className="text-gray-800 font-medium">{label}</span>
  </div>
);

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col gap-16">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="flex-shrink-0 w-40 sm:w-48 md:w-56 relative mx-auto md:mx-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-30 transition" />
          <img
            src="/ely.png"
            alt="Cherop Elisha"
            className="relative w-full h-full rounded-full object-cover shadow-xl ring-4 ring-white"
          />
        </div>

        {/* Intro & About */}
        <div className="flex-1 flex flex-col justify-center space-y-4 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Hi, I’m <span className="text-blue-600">CHEROP ELISHA</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Resourceful Full-Stack & Systems Engineer specializing in backend and frontend development, IT support, machine learning, and WordPress development. Skilled in Python, Django, Flask, React, FastAPI, WordPress, and CCNAv7-certified networking. I design and build scalable, data-driven systems, deliver production-ready features, and solve complex technical challenges with clean, maintainable software.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">About My Work</h2>
          <p className="text-gray-700">
            I am passionate about creating scalable, data-driven systems and delivering high-quality, maintainable software. With a dual background in Software Engineering and Network Infrastructure, I approach problems with a systems-level perspective, ensuring robust and efficient solutions across software, WordPress sites, and network systems.
          </p>
        </div>
      </div>

      {/* Skills / Technical Expertise */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SKILLS.map((skill) => (
            <SkillBadge key={skill.label} {...skill} />
          ))}
        </div>
      </div>

      {/* Key Competencies */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Competencies</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Backend Development (Django, Flask, FastAPI)</li>
          <li>Frontend Implementation (React, Tailwind)</li>
          <li>Network Infrastructure (Routing & Switching)</li>
          <li>Machine Learning (TensorFlow, Scikit-learn)</li>
          <li>DevOps (Docker, Git, Linux CLI)</li>
        </ul>
      </div>

    </section>
  );
}
