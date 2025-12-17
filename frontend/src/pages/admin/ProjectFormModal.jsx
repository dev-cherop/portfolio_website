import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function ProjectFormModal({
  isOpen,
  onClose,
  project,
  refresh,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    if (project) {
      setTitle(project.title || "");
      setDescription(project.description || "");
      setTechStack(project.tech_stack || "");
      setGithubLink(project.github_link || "");
    } else {
      setTitle("");
      setDescription("");
      setTechStack("");
      setGithubLink("");
    }

    setError("");
  }, [project, isOpen]);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }

    setLoading(true);
    setError("");

    const payload = {
      title: title.trim(),
      description: description.trim(),
      tech_stack: techStack.trim(),
      github_link: githubLink.trim(),
    };

    try {
      if (project) {
        await API.put(`/projects/${project.id}/`, payload);
      } else {
        await API.post("/projects/", payload);
      }

      refresh();
      onClose();
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin", { replace: true });
      } else {
        setError("Failed to save project. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="project-modal-title"
          className="text-xl font-semibold mb-4"
        >
          {project ? "Edit Project" : "New Project"}
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Project title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <textarea
            placeholder="Description (max 500 characters) *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
            className="w-full border p-2 rounded h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          <input
            type="text"
            placeholder="Tech stack (comma separated)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="url"
            placeholder="GitHub repository URL"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-scaleIn {
            animation: scaleIn 0.15s ease-out;
          }
        `}
      </style>
    </div>
  );
}
