import { FaProjectDiagram, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SIDEBAR_LINKS = [
  { name: "Projects", path: "projects", icon: <FaProjectDiagram /> },
  { name: "Contacts", path: "contacts", icon: <FaEnvelope /> },
];

export default function Sidebar({ className = "" }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside
      className={`w-64 h-screen bg-gray-900 text-gray-200 flex flex-col ${className}`}
    >
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      </div>

      <nav className="flex-1 p-4 flex flex-col justify-between">
        <ul className="space-y-2">
          {SIDEBAR_LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md transition-colors
                   ${
                     isActive
                       ? "bg-blue-600 text-white"
                       : "hover:bg-gray-800 hover:text-white"
                   }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 mt-4 rounded-md hover:bg-red-600 hover:text-white transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
