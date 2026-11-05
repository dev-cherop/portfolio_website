
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dev-cherop",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cherop-elisha-8675a0368/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:cheropelishaa@gmail.com",
    icon: FaEnvelope,
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            DEV-CHEROP<span className="text-blue-500">.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

          {/* SOCIAL LINKS */}
          <div className="hidden md:flex items-center gap-5">

            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target={name === "Email" ? undefined : "_blank"}
                rel={name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={name}
                className="text-slate-400 hover:text-blue-400 transition text-lg"
              >
                <Icon />
              </a>
            ))}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden text-white text-2xl p-2"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-6"
          >

            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-medium transition ${
                      isActive
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-blue-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </div>

            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-800">

              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={name}
                  className="text-slate-400 hover:text-blue-400 text-xl transition"
                >
                  <Icon />
                </a>
              ))}

            </div>

          </div>
        )}

      </nav>

      {/* PAGE CONTENT */}
      <main className="flex-grow">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}
