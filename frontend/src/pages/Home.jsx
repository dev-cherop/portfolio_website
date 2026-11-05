
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaServer,
  FaNetworkWired,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiFlask,
  SiScikitlearn,
  SiGit,
} from "react-icons/si";
import { Link } from "react-router-dom";

const skills = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Git & GitHub", icon: SiGit },
  { name: "Databases", icon: FaDatabase },
];

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Building responsive, accessible and user-friendly interfaces with React, JavaScript and modern CSS.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Developing backend applications, REST APIs, authentication systems and database-driven solutions.",
  },
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    description:
      "Connecting frontend experiences with reliable backend services to build complete web applications.",
  },
  {
    icon: FaNetworkWired,
    title: "IT & Networking",
    description:
      "Practical experience in IT support, troubleshooting, networking and systems administration.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-400/10 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to remote opportunities
            </div>

            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              CHEROP
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ELISHA.
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mt-6 font-medium">
              Full-Stack Developer
            </h2>

            <p className="text-slate-400 mt-6 leading-8 max-w-xl">
              I build modern web applications using Python, Django,
              React and JavaScript. I enjoy solving real-world problems
              through clean code, thoughtful user experiences and reliable
              software solutions.
            </p>

            <p className="text-slate-500 mt-3">
              Based in Kampala, Uganda · Available for remote work
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/projects"
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
              >
                Explore My Work <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-lg font-semibold transition"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10 text-2xl text-slate-400">
              <a
                href="https://github.com/dev-cherop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/cherop-elisha-8675a0368/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />

              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-4">
                <img
                  src="/ely.png"
                  alt="Cherop Elisha"
                  className="w-full aspect-[4/5] object-cover rounded-[60px]" 
                />

                <div className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur border border-slate-700 rounded-xl p-4">
                  <p className="font-bold text-lg">Cherop Elisha</p>
                  <p className="text-blue-400 text-sm">
                    Python & React Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">
            Turning ideas into practical software solutions.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-400 leading-8">
              I am a Computer Science graduate from Ndejje University
              with experience in software development, IT support and
              computer networking. My development interests include
              backend engineering, frontend development and machine
              learning applications.
            </p>

            <p className="text-slate-400 leading-8">
              I have worked on backend applications, REST APIs and
              interactive web projects. I also bring practical experience
              troubleshooting computer systems and supporting network
              infrastructure. I value continuous learning, collaboration
              and building software that solves meaningful problems.
            </p>
          </div>

          <a
            href="mailto:cheropelishaa@gmail.com"
            className="inline-flex items-center gap-2 text-blue-400 mt-8 hover:text-blue-300"
          >
            Let's connect <FaArrowRight />
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            My Technologies
          </p>

          <h2 className="text-3xl font-bold mt-4 mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-blue-500 hover:-translate-y-1 transition"
              >
                <Icon className="text-3xl text-blue-400" />
                <span className="text-slate-300 text-sm font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            What I Do
          </p>

          <h2 className="text-3xl font-bold mt-4 mb-12">
            Areas of Expertise
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
              >
                <Icon className="text-3xl text-blue-400 mb-5" />
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-7">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
            My Background
          </p>

          <h2 className="text-3xl font-bold mt-4 mb-10">
            Education & Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-7">
              <h3 className="font-bold text-xl mb-3">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-blue-400">Ndejje University</p>
              <p className="text-slate-400 text-sm mt-2">2022 – 2025</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-7">
              <h3 className="font-bold text-xl mb-3">
                Professional Experience
              </h3>
              <p className="text-slate-300">
                Junior Software Developer · Tricsoft Technologies
              </p>
              <p className="text-slate-400 text-sm mt-2">
                October 2025 – May 2026
              </p>
              <p className="text-slate-400 mt-4 text-sm leading-7">
                Additional experience in freelance web development,
                IT support and networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
          Have a project in mind?
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-5">
          Let's build something meaningful.
        </h2>

        <p className="text-slate-400 mt-5 max-w-xl mx-auto leading-7">
          I'm interested in software development opportunities,
          freelance projects and collaborations.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-9 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-semibold transition"
        >
          Get In Touch <FaArrowRight />
        </Link>
      </section>

    </div>
  );
}
