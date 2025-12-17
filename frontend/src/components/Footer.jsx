import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:youremail@example.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">CHEROP ELISHA</span>.  
          All rights reserved.
        </p>

        {/* Social Links */}
        <nav aria-label="Social media links">
          <ul className="flex gap-6">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="
                    text-xl
                    transition
                    hover:text-blue-400
                    hover:scale-110
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                    rounded
                  "
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
