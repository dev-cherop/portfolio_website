import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await API.get("/contacts/");
        setContacts(res.data);
      } catch (err) {
        console.error(err);

        // If token expired or unauthorized
        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin", { replace: true });
        } else {
          setError("Failed to load contacts.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  if (loading) {
    return (
      <p className="text-gray-500 animate-pulse">
        Loading contacts…
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 font-medium">
        {error}
      </p>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">
        Contacts
      </h2>

      {contacts.length === 0 ? (
        <p className="text-gray-500">
          No contacts found.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-300 bg-white shadow-sm">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border">Subject</th>
                <th className="px-4 py-3 border">Message</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2 border font-medium">
                    {contact.name}
                  </td>

                  <td className="px-4 py-2 border">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </td>

                  <td className="px-4 py-2 border">
                    {contact.subject || "—"}
                  </td>

                  <td
                    className="px-4 py-2 border max-w-md truncate"
                    title={contact.message}
                  >
                    {contact.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
