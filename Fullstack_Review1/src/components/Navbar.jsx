import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:text-blue-200 transition">
          <FaHome />
          Feedback System
        </Link>
        <div className="flex gap-4">
          <Link to="/student" className="hover:bg-blue-700 px-3 py-2 rounded transition">
            Student
          </Link>
          <Link to="/admin" className="hover:bg-blue-700 px-3 py-2 rounded transition">
            Admin
          </Link>
          <Link to="/login" className="flex items-center gap-2 hover:bg-red-600 px-3 py-2 rounded transition">
            <FaSignOutAlt />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
