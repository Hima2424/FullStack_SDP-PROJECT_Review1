import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminDashboard;
