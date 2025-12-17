import { useState, useEffect } from "react";
import API from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Auto-hide success/error messages
  useEffect(() => {
    if (!success && !error) return;

    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [success, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setSuccess("");
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Name, email, and message are required.");
      setLoading(false);
      return;
    }

    try {
      await API.post("/contacts/", formData);

      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Contact Me
      </h2>

      {/* Status Messages */}
      <div aria-live="polite" className="mb-4 space-y-2">
        {success && (
          <p className="text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded">
            {success}
          </p>
        )}

        {error && (
          <p className="text-red-700 bg-red-50 border border-red-200 px-4 py-2 rounded">
            {error}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700">
            Subject
          </span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Optional subject"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
            rows={5}
            className="border p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white font-semibold py-3 rounded-md transition
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
            ${loading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
