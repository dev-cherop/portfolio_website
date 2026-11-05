
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ENDPOINT) {
      setError("Contact form is not configured yet. Please email me directly.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
          Get in touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Let's Work Together
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Have a project, job opportunity, or collaboration in mind?
          I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">
            Let's talk about your project.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-10">
            I'm open to junior developer opportunities, freelance projects,
            and collaborations involving Python, React, and web development.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-blue-400 text-xl" />
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <a href="mailto:cheropelisha1@gmail.com"
                className="hover:text-blue-400 transition">
                cheropelisha1@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p>Kampala, Uganda · Open to remote work</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 space-y-5"
        >
          {status === "success" && (
            <p role="status" className="bg-green-50 text-green-700 p-3 rounded-lg">
              Your message has been sent. Thank you for reaching out!
            </p>
          )}

          {error && (
            <p role="alert" className="bg-red-50 text-red-700 p-3 rounded-lg">
              {error}
            </p>
          )}

          {[
            { name: "name", label: "Your name", type: "text" },
            { name: "email", label: "Your email", type: "email" },
            { name: "subject", label: "Subject", type: "text" },
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}{field.name !== "subject" && " *"}
              </span>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.name !== "subject"}
                placeholder={field.label}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          ))}

          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-lg py-3 flex items-center justify-center gap-2 transition"
          >
            <FaPaperPlane />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
