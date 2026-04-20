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
            Backend Software Developer with hands-on experience in building scalable web applications, alongside strong expertise in IT support, networking, and hardware systems.
           Skilled in Python, Django, FastAPI, React, and CCNAv7-certified networking,
           I develop reliable software solutions while also managing system infrastructure, troubleshooting hardware/software issues, and supporting real-world IT environments.
          </p>
          <p className="text-md sm:text-lg text-gray-600 font-medium">
            Software Developer • IT Support Specialist • Network & Systems Enthusiast
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">About My Work</h2>
         <p className="text-gray-700">
            I combine software engineering with practical IT and network infrastructure experience, allowing me to solve problems from both application and system levels. I build secure, scalable backend systems, develop user-facing applications, and ensure underlying networks and hardware operate efficiently. 
          
            Whether it's developing APIs, configuring networks, troubleshooting systems, or maintaining IT environments, I focus on delivering reliable, maintainable, and production-ready solutions.
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
        <li>Frontend Development (React, Tailwind CSS)</li>
        <li>IT Support & Troubleshooting (Hardware & Software)</li>
        <li>Network Configuration (LAN/WAN, Routing & Switching)</li>
        <li>System Administration (Linux, CLI, Basic Security)</li>
        <li>Machine Learning (Scikit-learn, TensorFlow - foundational)</li>
        <li>DevOps & Tools (Docker, Git, Deployment basics)</li>
      </ul>
      </div>

    </section>
  );
}
