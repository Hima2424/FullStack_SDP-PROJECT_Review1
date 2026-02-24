import FeedbackForm from "../components/FeedbackForm";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Student Dashboard</h1>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
