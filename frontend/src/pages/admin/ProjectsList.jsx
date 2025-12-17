import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import ProjectFormModal from "./ProjectFormModal";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchProjects = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await API.get("/projects/");
      setProjects(res.data);
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin", { replace: true });
      } else {
        setError("Failed to fetch projects.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirmed) return;

    try {
      await API.delete(`/projects/${id}/`);
      fetchProjects();
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin", { replace: true });
      } else {
        alert("Failed to delete project.");
      }
    }
  };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Projects</h2>

        <button
          onClick={() => {
            setSelectedProject(null);
            setModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Project
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white rounded shadow">
        {loading && (
          <p className="p-4 text-gray-500">Loading projects...</p>
        )}

        {!loading && error && (
          <p className="p-4 text-red-500">{error}</p>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="p-6 text-center text-gray-500">
            No projects yet.
          </p>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="p-3 border-b">Title</th>
                  <th className="p-3 border-b">Description</th>
                  <th className="p-3 border-b">Tech Stack</th>
                  <th className="p-3 border-b">GitHub</th>
                  <th className="p-3 border-b">Created</th>
                  <th className="p-3 border-b w-32">Actions</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium">{p.title}</td>

                    <td className="p-3 text-gray-600 line-clamp-2 max-w-xs">
                      {p.description}
                    </td>

                    <td className="p-3">{p.tech_stack || "—"}</td>

                    <td className="p-3">
                      {p.github_link ? (
                        <a
                          href={p.github_link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          GitHub
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>

                    <td className="p-3 text-gray-500">
                      {new Date(p.created_at).toLocaleDateString()}
                    </td>

                    <td className="p-3 flex gap-3">
                      <button
                        onClick={() => {
                          setSelectedProject(p);
                          setModalOpen(true);
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProject(p.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
        refresh={fetchProjects}
      />
    </div>
  );
}
