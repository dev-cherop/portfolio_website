import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectsList from "./pages/admin/ProjectsList";
import ContactsList from "./pages/admin/ContactsList";

// Icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  const SOCIAL_LINKS = [
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

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen font-sans">

        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
  
  {/* Left: Title + Social Icons */}
  <div className="flex items-center gap-4">
    <h1 className="font-bold text-xl">My Portfolio</h1>

    <ul className="flex gap-3">
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-lg hover:text-gray-200 transition hover:scale-110"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Right: Navigation Links */}
  <ul className="flex gap-4">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/projects">Projects</Link></li> 
    <li><Link to="/contact">Contact</Link></li>
    
  </ul>

</nav>


        {/* Main */}
        <main className="flex-grow p-8">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="projects" replace />} />
              <Route path="projects" element={<ProjectsList />} />
              <Route path="contacts" element={<ContactsList />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
