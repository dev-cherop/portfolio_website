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

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold text-xl">My Portfolio</h1>
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin/projects">Admin</Link></li>
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
