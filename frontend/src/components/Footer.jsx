export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-white">CHEROP ELISHA</span>.  
        All rights reserved.
      </div>
    </footer>
  );
}
