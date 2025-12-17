import React from "react";
import {FaPython,FaReact,FaDatabase,FaDocker,FaLinux,FaNetworkWired,FaHtml5,FaCss3Alt,FaJs,
} from "react-icons/fa";
import {SiTailwindcss,SiTensorflow,SiScikitlearn,SiPostgresql,SiFirebase,SiGraphql,} from "react-icons/si";

const SKILLS = [
  { icon: FaPython, label: "Python", color: "text-yellow-500" },
  { icon: FaReact, label: "React", color: "text-blue-500" },
  { icon: FaDatabase, label: "Django / Flask / DB", color: "text-green-600" },
  { icon: FaDocker, label: "Docker", color: "text-blue-400" },
  { icon: FaLinux, label: "Linux / Git", color: "text-gray-800" },
  { icon: FaNetworkWired, label: "Networking / CCNAv7 / Huawei Datacom", color: "text-purple-500" },
  { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
  { icon: FaCss3Alt, label: "CSS", color: "text-blue-600" },
  { icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
  { icon: SiTailwindcss, label: "Bootstrap / Tailwind CSS", color: "text-teal-400" },
  { icon: SiTensorflow, label: "TensorFlow", color: "text-orange-600" },
  { icon: SiScikitlearn, label: "Scikit-learn / Pandas / NumPy", color: "text-green-400" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-700" },
  { icon: SiFirebase, label: "Backend Services", color: "text-yellow-500" },
  { icon: SiGraphql, label: "FAST / REST APIs", color: "text-pink-500" },
];

const SkillCard = React.memo(({ icon: Icon, label, color }) => (
  <div
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur shadow-sm
               hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    aria-label={label}
  >
    <Icon className={`text-lg ${color}`} />
    <span className="font-medium text-gray-700 text-sm sm:text-base">
      {label}
    </span>
  </div>
));

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col sm:flex-row gap-10">
      
      {/* Profile Image */}
      <div className="flex-shrink-0 text-center">
        <div className="relative group w-32 sm:w-40 md:w-48 mx-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-full bg-gradient-to-r
                       from-blue-500 to-purple-500 blur opacity-30
                       group-hover:opacity-60 transition"
          />
          <img
            src="/ely.png"
            alt="Cherop Elisha profile photo"
            loading="lazy"
            className="relative rounded-full w-full h-full object-cover shadow-xl
                       ring-4 ring-white group-hover:scale-105 transition-transform"
          />
        </div>

        <p className="mt-4 font-semibold text-gray-700 tracking-wide">
          DEV-CHEROP
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m{" "}
            <span className="inline-block border-r-2 border-blue-600 pr-1 animate-typing">
              CHEROP ELISHA
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Full-Stack & Systems Engineer
            </span>
          </h1>
        </header>

        <p className="text-gray-700 text-base sm:text-lg">
          I design and build scalable web applications, analyze data,
          and solve complex IT challenges using modern technologies.
        </p>

        <p className="text-gray-600 text-sm sm:text-base">
          A detail-oriented Computer Science graduate with hands-on experience
          in backend & frontend development, IT support, and machine learning.
          I’m passionate about creating efficient, user-friendly systems.
        </p>

        {/* Skills */}
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.label} {...skill} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
